
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ProductLaunchCatalogUpdateProductionInventoryPlanProductionAllocateStock extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-data" context="data"></blaze-field-group>
      
    `;

    
      const fgdata = this.shadowRoot.getElementById("fg-data");
      fgdata.context = "data";
      fgdata.model = {};
      
    
          // 1️⃣ Render fields immediately with default labels
    fgdata.fields = [{"id":"productId","name":"Product ID","type":"text","required":false,"description":"Unique product identifier or SKU.","label":"Product ID"},{"id":"inventoryId","name":"Inventory ID","type":"text","required":false,"description":"Internal inventory record id.","label":"Inventory ID"},{"id":"stockLevel","name":"Stock level","type":"number","required":false,"description":"Current available units.","label":"Stock level"},{"id":"reorderThreshold","name":"Reorder threshold","type":"number","required":false,"description":"Level that triggers replenishment.","label":"Reorder threshold"}];

    // 2️⃣ Apply translations later (if available)
    this.updateFieldLabels();
      
      fgdata.data = { "data": this._formData.data || {} };
   

  }

  populateForm() {
    
    const fgdata = this.shadowRoot?.getElementById("fg-data");
    if (fgdata) {
      fgdata.data = { "data": this._formData["data"] || {} };
    }
  
  }
}

customElements.define("product-launch-catalog-update-production-inventory-plan-production-allocate-stock", ProductLaunchCatalogUpdateProductionInventoryPlanProductionAllocateStock);
export default ProductLaunchCatalogUpdateProductionInventoryPlanProductionAllocateStock;
