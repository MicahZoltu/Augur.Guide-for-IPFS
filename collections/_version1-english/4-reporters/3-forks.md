---
title: Forks
---
{% assign current_collection = site.collections | where: "label", page.collection | first %}

{% capture rep_link %}/{{page.collection}}/7-glossary.html#REP{% endcapture %}
{% capture market_link %}/{{page.collection}}/7-glossary.html#Market{% endcapture %}
{% capture forked_market_link %}/{{page.collection}}/7-glossary.html#Forked_Market{% endcapture %}
{% capture dispute_link %}/{{page.collection}}/7-glossary.html#Dispute{% endcapture %}
{% capture fork_period_link %}/{{page.collection}}/7-glossary.html#Fork_Period{% endcapture %}
{% capture fee_window_link %}/{{page.collection}}/7-glossary.html#Fee_Window{% endcapture %}
{% capture universe_link %}/{{page.collection}}/7-glossary.html#Universe{% endcapture %}
{% capture genesis_universe_link %}/{{page.collection}}/7-glossary.html#Genesis_Universe{% endcapture %}
{% capture report_link %}/{{page.collection}}/7-glossary.html#Report{% endcapture %}
{% capture outcome_link %}/{{page.collection}}/7-glossary.html#Outcome{% endcapture %}
{% capture child_universe_link %}/{{page.collection}}/7-glossary.html#Child_Universe{% endcapture %}
{% capture yes_no_market_link %}/{{page.collection}}/7-glossary.html#Yes/No_Market{% endcapture %}
{% capture fork_example_image %}/assets/images/{{page.collection}}/fork-example.svg{% endcapture %}
{% capture parent_universe_link %}/{{page.collection}}/7-glossary.html#Parent_Universe{% endcapture %}
{% capture locked_universe_link %}/{{page.collection}}/7-glossary.html#Locked_Universe{% endcapture %}
{% capture share_link %}/{{page.collection}}/7-glossary.html#SHARE{% endcapture %}
{% capture initial_report_link %}/{{page.collection}}/7-glossary.html#Initial_Report{% endcapture %}
{% capture winning_universe_link %}/{{page.collection}}/7-glossary.html#Winning_Universe{% endcapture %}
{% capture initial_reporter_link %}/{{page.collection}}/7-glossary.html#Initial_Reporter{% endcapture %}
{% capture dispute_bond_link %}/{{page.collection}}/7-glossary.html#Dispute_Bond{% endcapture %}
{% capture reporting_process_link %}/{{page.collection}}/4-reporters/reporting-process.html{% endcapture %}

# Reporters: Forks

This page is adapted from the [Augur Whitepaper]({{current_collection.whitepaper-pdf-url}}) due to its highly technical nature. The intricate details are most important to understand as a [REP]({{ rep_link | relative_url }}) reporter, although everyone who participates in Augur may be affected by it at some point.

The fork state is a special state that can last up to 60 days.  Forking is the [market]({{ market_link | relative_url }}) resolution method of last resort; it is a very disruptive process and is intended to be a rare occurrence. This market is referred to as the [forking market]({{ forked_market_link | relative_url }}), as it has implications for the other markets that currently exist. When a fork is initiated, [disputing]({{ dispute_link | relative_url }}) for all other non-resolved markets is put on hold until this fork resolves.  The [forking period]({{ fork_period_link | relative_url }}) is much longer than the usual [fee window]({{ fee_window_link | relative_url }}) because the platform needs to provide ample time for REP holders and service providers (such as wallets and exchanges) to prepare.  A fork's final outcome cannot be disputed. 

Every Augur market and all REP tokens exist in some [universe]({{ universe_link | relative_url }}). Currently there is only one universe - the [genesis universe]({{ genesis_universe_link | relative_url }}) - since there has never been a fork. REP tokens can be used to [report]({{ report_link | relative_url }}) on [outcomes]({{ outcome_link | relative_url }}) (and thus earn fees) only for markets that exist in the same universe as  the REP tokens. When a market forks, new universes are created. Forking creates a new [child universe]({{ child_universe_link | relative_url }}) for each possible outcome of the forking market (including Invalid). 

For example, a ["Yes/No" market]({{ yes_no_market_link | relative_url }}) has 3 possible outcomes: Yes, No, and Invalid.  Thus, a "Yes/No" forking market will create three new child universes: universeYes, universeNo, and universeInvalid.

<div class="center">
{% capture image_url %}
  {{ fork_example_image | relative_url }}
{% endcapture %}
{% include image.html url=image_url description="Figure 1. Forked Genesis Universe Example" %}
</div>

Initially, these newly created universes are empty: they contain no markets or REP tokens. When a fork is initiated, the [parent universe]({{ parent_universe_link | relative_url }}) becomes permanently locked. In a [locked universe]({{ locked_universe_link | relative_url }}), no new markets may be created. Users may continue trading [SHARES]({{ share_link | relative_url }}) in markets in locked universes, and markets in a locked universe may still receive their [initial reports]({{ initial_report_link | relative_url }}). However, no reporting rewards are paid out there, no disputes can occur, and markets in locked universes cannot be finalized.

In order for markets or REP tokens in the locked universe to be useful, they must first be migrated to a child universe. Holders of REP tokens in the parent universe may migrate their tokens to a child universe of their choice. This choice should be considered carefully, because migration is one-way; it cannot be reversed. Tokens cannot be sent from one sibling universe to another. Migration is a permanent commitment of REP tokens to a particular market outcome. REP tokens that migrate to different child universes ought to be considered entirely separate tokens, and service providers like wallets and exchanges ought to list them as such. When a fork is initiated, all REP staked on all non-forking markets is unstaked so that it is free to be migrated to a child universe during the forking period. 

Whichever child universe receives the most migrated REP by the end of the forking period becomes the [winning universe]({{ winning_universe_link | relative_url }}), and its corresponding outcome becomes the final outcome of the forking market.  Unfinalized markets in the parent universe may be migrated only to the winning universe and, if they have received an initial report, are reset back to the waiting for next fee window to begin phase. This means that those markets will have to go through the dispute process from round 1 which can additional delays to those markets resolving. The only exception is the REP staked by the [initial reporter]({{ initial_reporter_link | relative_url }}) when they made the initial report. That REP remains staked on the initial reported outcome and is automatically migrated to the child universe that wins the fork.

In Augur version 1, there is no time limit to migrate REP tokens from the parent universe to a child universe. Tokens may be migrated after the forking period, but they will not count towards the determination of the winning universe. To encourage greater participation during the forking  period, all token holders who migrate their REP within 60 days of the start of a fork will receive 5% additional REP in the child universe to which they migrated. This reward is paid for by minting new REP tokens. 

Reporters that have staked REP on one of the forking market's outcomes cannot change their position during a fork. REP that was staked on an outcome in the parent universe can be migrated only to the child universe that corresponds to that outcome. For example, if a reporter helped fulfill a successful [dispute bond]({{ dispute_bond_link | relative_url }}) in favor of outcomeA during some dispute round, then the REP they have staked on outcomeA can only be migrated to universeA during a fork. Sibling universes are entirely disjoint (separate). REP tokens that exist in one universe cannot be used  to report on events or earn rewards from markets in another universe. 

Since users presumably will not want to create or trade on markets in a universe whose oracle is untrustworthy, REP that exists in a universe that does not correspond to objective reality is unlikely to earn its owner any fees, and therefore should not hold any significant market value. Therefore, REP tokens migrated to a universe which does not correspond to objective reality should hold no market value, regardless of whether or not the objectively false universe ends up being the winning universe after a fork. 

Recall from the [Reporting Process]({{ reporting_process_link | relative_url }}) page that any REP staked successfully disputing an outcome in favor of the market's final outcome will receive a 50% ROI on their dispute stake.

In the event of a fork, any REP staked on any of the market's false outcomes should lose all economic value, while any REP staked on the market's true outcome is rewarded with 50% more REP (via newly minted REP) in the child universe that corresponds to the market's true outcome (regardless of the outcome of the fork). Therefore, if pushed to a fork, REP holders who dispute false outcomes in favor of true outcomes will always come out ahead, while REP holders who staked on false outcomes will see their REP lose all economic value. 

Note: Forking  periods  can  be  less  than  60  days:  a  forking  period  ends when either 60 days have passed, or more than 50% of all genesis REP is migrated to some child universe.