const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class ProductLaunch&CatalogUpdateCase extends BlazeCase {
  constructor() {
    super(
      "product-launch-catalog-update",
      "Product Launch & Catalog Update",
      [
{
      id: "Design_&_Planning",
      label: "Design & Planning",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-launch-&-catalog-update-design-&-planning-start",
          dataModelReference: { models: [] }
        },
{
          id: "catalog.design.finalize",
          label: "Finalize product design & specs",
          type: "manual",
          status: "pending",
          view: "product-launch-&-catalog-update-design-&-planning-finalize-product-design-&-specs",
          dataModelReference: { models: ["productId", "name", "description", "fabric", "category"] }
        },
{
          id: "catalog.pricing.set",
          label: "Set pricing & SKUs",
          type: "manual",
          status: "pending",
          view: "product-launch-&-catalog-update-design-&-planning-set-pricing-&-skus",
          dataModelReference: { models: ["productId", "sku", "price"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-launch-&-catalog-update-design-&-planning-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Production_&_Inventory",
      label: "Production & Inventory",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-launch-&-catalog-update-production-&-inventory-start",
          dataModelReference: { models: [] }
        },
{
          id: "catalog.production.plan",
          label: "Plan production & allocate stock",
          type: "manual",
          status: "pending",
          view: "product-launch-&-catalog-update-production-&-inventory-plan-production-&-allocate-stock",
          dataModelReference: { models: ["productId", "inventoryId", "stockLevel", "reorderThreshold"] }
        },
{
          id: "catalog.listing.live",
          label: "Publish live listing",
          type: "manual",
          status: "pending",
          view: "product-launch-&-catalog-update-production-&-inventory-publish-live-listing",
          dataModelReference: { models: ["productId", "name", "price", "sizeChart"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-launch-&-catalog-update-production-&-inventory-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Promotion",
      label: "Promotion",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-launch-&-catalog-update-promotion-start",
          dataModelReference: { models: [] }
        },
{
          id: "catalog.promo.launch",
          label: "Launch marketing campaign",
          type: "manual",
          status: "pending",
          view: "product-launch-&-catalog-update-promotion-launch-marketing-campaign",
          dataModelReference: { models: ["campaignId", "name", "channel", "startDate", "budget"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-launch-&-catalog-update-promotion-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new ProductLaunch&CatalogUpdateCase();