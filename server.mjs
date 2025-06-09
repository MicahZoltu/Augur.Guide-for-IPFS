// Dependencies
import * as http from 'node:http'
import * as filesystem from 'node:fs/promises'
const mimeTypes = JSON.parse(await filesystem.readFile('./mime-types.json', { encoding: 'utf8' }))

const server = http.createServer()
server.on('request', async (request, response) => {
	try {
		// NOT SECURE!  Will happily read `../../../../private-file.txt`
		const filePath = decodeURI(`./app${request.url}`)
		const fileContents = await filesystem.readFile(filePath)
		const extension = filePath.split('.').pop();
		const mimeType = mimeTypes[extension]
		if (mimeType !== undefined) {
			response.writeHead(200, { 'Content-Type': mimeType})
		}
		response.write(fileContents)
		response.end()
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log(`404: ${request.url}`)
			response.writeHead(404)
			response.end()
		} else {
			console.log(`500: ${request.url}\n${error.message}`)
			response.writeHead(500)
			response.end()
		}
	}
})

// Initiate the server on Port 3000 and returning a message
const port = 15243
server.listen(port)
console.log(`Web Server listening on port ${port}...`)
