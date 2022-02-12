{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 *}
<div id="vec-use-scroll"></div>
<div id="js-product-list-top" class="row products-selection">
  <div class="col-md-6 hidden-sm-down total-products">
    {if $listing.pagination.total_items > 1}
      <p>{l s='There are %product_count% products.' d='Shop.Theme.Catalog' sprintf=['%product_count%' => $listing.pagination.total_items]}</p>
    {elseif $listing.pagination.total_items > 0}
      <p>{l s='There is 1 product.' d='Shop.Theme.Catalog'}</p>
    {/if}
  </div>
  <div class="col-md-6">
    <div class="row sort-by-row">
      <div class="filter-button {if isset($vectheme.category_filter) && $vectheme.category_filter != 'canvas'}hidden-md-up{/if}">
        <a href="#">{l s='Filter' d='Shop.Theme.Actions'}</a>
      </div>
      {foreach from=$listing.sort_orders item=sort_order}
        {if $sort_order.current}
            {if isset($sort_order.url)}
            {assign var="currentSortUrl" value=$sort_order.url|regex_replace:"/&shop_view=\d+$/":""}
            {/if}
            {break}

        {/if}
      {/foreach}

      {if !isset($currentSortUrl)}
          {if isset($sort_order.url)}
              {assign var="currentSortUrl" value=$sort_order.url|regex_replace:"/&shop_view=\d+$/":""}
          {/if}
      {/if}
			{if isset($currentSortUrl)}
				<div class="view-switcher">
					<a href="{$currentSortUrl}&shop_view=grid" class="shop-view {if !isset($vectheme.shop_view) || (isset($vectheme.shop_view) && $vectheme.shop_view == 'grid')}active{/if} {['js-search-link' => true]|classnames}" title="{l s='Grid' d='Shop.Theme.Vec'}">
						Grid
					</a>
					<a href="{$currentSortUrl}&shop_view=list" class="shop-view {if isset($vectheme.shop_view) && $vectheme.shop_view == 'list'}active{/if} {['js-search-link' => true]|classnames}" title="{l s='List' d='Shop.Theme.Vec'}">
						List
					</a>
				</div>
			{/if}
      {block name='sort_by'}
        {include file='catalog/_partials/sort-orders.tpl' sort_orders=$listing.sort_orders}
      {/block}

    </div>
  </div>
  <div class="col-sm-12 hidden-md-up text-sm-center showing">
    {l s='Showing %from%-%to% of %total% item(s)' d='Shop.Theme.Catalog' sprintf=[
    '%from%' => $listing.pagination.items_shown_from ,
    '%to%' => $listing.pagination.items_shown_to,
    '%total%' => $listing.pagination.total_items
    ]}
  </div>
  
</div>
