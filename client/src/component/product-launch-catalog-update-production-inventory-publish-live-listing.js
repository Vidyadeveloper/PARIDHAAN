
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ProductLaunchCatalogUpdateProductionInventoryPublishLiveListing extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"productId","name":"Product ID","type":"text","required":false,"description":"Unique product identifier or SKU.","label":"Product ID"},{"id":"name","name":"Product name","type":"text","required":false,"description":"Commercial name of the product.","label":"Product name"},{"id":"price","name":"Price","type":"number","required":false,"description":"Retail price for the SKU.","label":"Price"},{"id":"sizeChart","name":"Size chart reference","type":"text","required":false,"description":"Reference or URL to size chart.","label":"Size chart reference"}];

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

customElements.define("product-launch-catalog-update-production-inventory-publish-live-listing", ProductLaunchCatalogUpdateProductionInventoryPublishLiveListing);
export default ProductLaunchCatalogUpdateProductionInventoryPublishLiveListing;
