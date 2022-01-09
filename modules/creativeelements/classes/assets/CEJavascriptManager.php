<?php
/**
 * Creative Elements - live PageBuilder
 *
 * @author    WebshopWorks
 * @copyright 2019-2021 WebshopWorks.com
 * @license   One domain support license
 */

use PrestaShop\PrestaShop\Core\ConfigurationInterface;

defined('_PS_VERSION_') or exit;

class CEJavascriptManager extends JavascriptManager
{
    public function __construct(array $directories, ConfigurationInterface $configuration, $list = null)
    {
        parent::__construct($directories, $configuration);

        is_null($list) or $this->list = $list;
    }

    public function getList()
    {
        return parent::getDefaultList();
    }

    public function listAll()
    {
        return parent::getList();
    }
}