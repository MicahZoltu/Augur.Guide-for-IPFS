---
title: Trading Diagrams
---

{% capture order_link %}/{{page.collection}}/7-glossary.html#Order{% endcapture %}
{% capture order_book_link %}/{{page.collection}}/7-glossary.html#Order_Book{% endcapture %}
{% capture outcome_link %}/{{page.collection}}/7-glossary.html#Outcome{% endcapture %}
{% capture yesno_market_link %}/{{page.collection}}/7-glossary.html#Yes/No_Market{% endcapture %}
{% capture scalar_market_link %}/{{page.collection}}/7-glossary.html#Scalar_Market{% endcapture %}
{% capture categorical_market_link %}/{{page.collection}}/7-glossary.html#Categorical_Market{% endcapture %}
{% capture complete_set_link %}/{{page.collection}}/7-glossary.html#Complete_Set{% endcapture %}
{% capture bid_order_link %}/{{page.collection}}/7-glossary.html#Bid_Order{% endcapture %}
{% capture ask_order_link %}/{{page.collection}}/7-glossary.html#Ask_Order{% endcapture %}

{% capture create_complete_set_image %}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/create-complete-set.svg{% endcapture %}
{% capture settle_complete_set_image %}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/settle-complete-set.svg{% endcapture %}
{% capture redeem_winning_shares_image %}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/redeem-winning-shares.svg{% endcapture %}
{% capture direct_trade_image %}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/direct-trade.png{% endcapture %}
{% capture escrow_share_eth_image %}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/escrow-share-and-eth.svg{% endcapture %}
{% capture partial_create_complete_set_image %}/assets/images/{{page.collection}}/trading-diagrams/partially-filled-orders/create-complete-set.svg{% endcapture %}
{% capture partial_settle_complete_set_image %}/assets/images/{{page.collection}}/trading-diagrams/partially-filled-orders/settle-complete-set.svg{% endcapture %}

# Traders: Trading Diagrams

This page details the nitty-gritty for what happens behind the scenes when you trade on Augur. Trades can either be partially filled or completely filled. Within each of those two categories, specific examples will be shown below. 

Note that these examples don't include the simple example of just creating an [order]({{ order_link | relative_url }}) on the [order book]({{ order_book_link | relative_url }}). Remember, you need a counterparty for an actual trade to occur.

In all of the examples shown, the market in question has two [outcomes]({{ outcome_link | relative_url }}), A and B. You can think of these as "Yes" and "No" for a [Yes/No market]({{ yesno_market_link | relative_url }}), or "Long" vs. "Short" for a [scalar market]({{ scalar_market_link | relative_url }}). [Categorical markets]({{ categorical_market_link | relative_url }}) will behave slightly differently, since there are more than 2 outcomes in a [complete set]({{ complete_set_link | relative_url }}). This list of examples is not exhaustive for all the possibilities in Augur, but covers the possibilities for a two outcome market. In the examples below, note that [bidding/buying]({{ bid_order_link | relative_url }}) a SHARE of A for price "x" is equivalent to [asking/selling]({{ ask_order_link | relative_url }}) a SHARE of B for price "1-x".

## Completely Filled Orders

### Create Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no SHARES. She wants to buy 1 SHARE of A for 0.8 ETH.
Bob	| He has no SHARES. He wants to buy 1 SHARE of B for 0.2 ETH.

![Augur UI]({{ create_complete_set_image | relative_url }})

Note that Bob could have also wanted to sell 1 SHARE of A for 0.8 ETH, which would have been a "Ask Outcome A, 1 SHARE for 0.8 ETH". This would have had created the same result as shown above, even though he has no SHARES.

### Settle Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has 1 SHARE of B. He wants to sell it for 0.2 ETH.

![Augur UI]({{ settle_complete_set_image | relative_url }})

### Redeem Winning SHARES

Actor | Situation
--- | ---
Market | Finalized. Winning Outcome is A. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to cash it in.
Bob	| He has 1 SHARE of B. (His SHARES are worthless)

![Augur UI]({{ redeem_winning_shares_image | relative_url }})

### Direct Trade

Actor | Situation
--- | ---
Alice	| She has 1 SHARE of A.  She wants to sell it for 0.8 ETH.
Bob	| He has some ETH. He wants to buy 1 SHARES of A.

![Augur UI]({{ direct_trade_image | relative_url }})

### Escrow Share and ETH

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has some ETH. He wants to buy 1 SHARE of A for 0.8 ETH.

![Augur UI]({{ escrow_share_eth_image | relative_url }})

## Partially Filled Orders

### Create Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no SHARES. She wants to buy 1 SHARE of A for 0.8 ETH.
Bob	| He has no SHARES. He wants to buy 0.5 SHARES of B for 0.1 ETH.

![Augur UI]({{ partial_create_complete_set_image | relative_url }})

### Settle Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has 0.5 SHARES of B. He wants to sell it for 0.1 ETH.

![Augur UI]({{ partial_settle_complete_set_image | relative_url }})