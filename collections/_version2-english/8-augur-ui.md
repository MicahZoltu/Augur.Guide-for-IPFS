---
title: Augur UI
---

# Quick way to access Augur UI
Are you in a hurry? ​Use the links below.

<table id="quick-access-table"></table>

(*1) For browsers which have installed [MetaMask-Extention](https://metamask.io/) or browsers support [ENS](https://ens.domains/) ([Brave](https://brave.com/), [Opera](https://www.opera.com/), [Status](https://status.im/web-three-browser/)).

(*2) For browsers that don't have MetaMask-Extention and not support ENS.

# Augur UIs are served in IPFS

To be censorship resistant, Augur UIs are served in a peer-to-peer system called [IPFS](https://ipfs.io/). So the content of Augur UI is referenced by a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) (`content identifier`). 

For example, the CIDv1 of Augur UI for trading (version 2.1.10) is that:
```
bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm
```

Then the URL of the Augur UI is that (*using `dweb.link` as public [IPFS Gateway](https://docs.ipfs.io/concepts/ipfs-gateway/#gateway-providers)):
```
https://bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm.ipfs.dweb.link
```

As you see, the URL containing CID is long and not human readable. In addition, each new UI release will produce a different CID. ​These make it almost impossible to memorize the URLs of the UI. However by using the (somewhat *non-trustless*) ways listed below, you can reduce the pain you experience when accessing the UI.

# Community Managed UIs with ENS

## What is Community Managed UI?
​"Community Managed UI" is the Augur UI which is linked by ENS whose content (CID) is updated by a community.

## What is ENS?
[ENS](https://ens.domains/)(`Ethereum Name Service`) supports `content-hashes` for data stored in IPFS. It serves the same rule that DNS does in the traditional website settings. While DNS tells the server where a website is stored, ENS tells what the `content-hash` of the website is.​ In other words, DNS converts human readable names to IP addresses, ENS converts human readable names such as `foobar.eth` to Ethereum addresses. These addresses can then be used to point to CIDs on IPFS. 
(​If you want to know more about ENS, check the [ENS documentation](https://docs.ens.domains/).)

​In short, ENS lets you access Augur UI with a URL that does not contain a CID.

It should be noted that when the UI is updated, the CID is also updated. ​Therefore the CID registered with the ENS must be updated each time the UI is updated. ​Otherwise the UI referenced by the ENS will remain out of date.

## Requirements
To access the UI from ENS, your browser need to support ENS. Alternatively, [MetaMask-Extention](https://metamask.io/) need to be installed in your browser.

Browsers that support ENS by default are:
- [Brave](https://brave.com/)
- [Opera](https://www.opera.com/)
- [Status](https://status.im/web-three-browser/)

## *.eth.link
​Don't worry if you don't meeet the above [requirements](#requirements), there is a way to access Augur UI without containing a CID in a URL. That is to append "`.link`" to the end of the ENS domain name.

For example, if the ENS domain name is:
```
augur2.eth
```
then, append "`.link`" to the end:
```
augur2.eth.link
```
​That's all. Just type this string into your browser's address-bar, then you get the content on IPFS.

**Note:** `eth.link` is operated by [Ethereum Name Service](https://ens.domains/) with support from [Protocol Labs](https://protocol.ai/) with no guarantees, ​so when you access the UI from `*.eth.link`, you need to trust them.

---

## augur2.eth
`augur2.eth` is one of the ENS domains where Augur UI is registered. This domain is managed by Augur community members called [smarty-pants]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Smarty_Pants).

The CID registered with the ENS is updated by a DAO whose members are Augur community members. They have shown a deep knowledge and interest in Augur and have received the [smarty-pants]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Smarty_Pants) role in [Discord](https://invite.augur.net/). Each time the UI is updated, they will verify that the CID provided by the Augur devs is the correct one and update the CID registered with `augur2.eth` via quorum voting.

### Links & Current Status
**​Note:** The content of subdomains (e.g. `trading.augur2.eth`, `reporting.augur2.eth`) have not been updated lately, so you should not use them.

<div class="center"><table id="augur2.eth-table"></table></div>

---

## augurapp.eth
`augur2.eth` is alos one of the ENS domains where Augur UI is registered. This domain is managed by Augur community members of [AugurDAO]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#AugurDAO).

### Links & Current Status
**​Note:** The content of subdomains (e.g. `bet.augurapp.eth`) have not been updated lately, so you should not use them.
<div class="center"><table id="augurapp.eth-table"></table></div>

## ​ENS domains other than the above
​If there are ENS domain which has Augur UI content other than the above, these will be listed here. If the list is not shown, that means there are no such ENS domain.

<div class="center"><table id="unknown-ens-domain-table"></table></div>


# Official Release

This is the list of products that have been released in the [augur repository](https://github.com/AugurProject/augur). 

## Official Release List
<table id="official-release-table"></table>



## ​Why are there two versions in one release?
[https://github.com/AugurProject/augur/releases](https://github.com/AugurProject/augur/releases) is the official UI release page. On this page, You can see two versions in one release. ​One is for `trading` and the other is for `reporting` (or `read-only`). 

The reporting UI is basically browse-only, has trading disabled but you can use it to report. The trading UI has no restrictions, which means you can do both reporting and trading.

Why are there two versions in one release? **The true reasons are not sure**, but it is *said* to be for legal reasons. ​
 
Gambling is prohibited in some countries. So when those people use Augur UI, it is said that the developers of Augur want to disable trading. ​In fact, there are some reports that when accessing Augur UI from the link on [augur.net](https://augur.net/), the people in certain countries are redirected to the reporting UI, and people in other countries get trading UI. 

However, the true reasons are not sure as mentioned above. Since there is no official announcement about that from [Forecast Foundation]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Forecast_Foundation).


{% include augur-ui.html %}