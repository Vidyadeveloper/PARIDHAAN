
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ProductLaunchCatalogUpdatePromotionLaunchMarketingCampaign extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"campaignId","name":"Campaign ID","type":"text","required":false,"description":"Unique campaign identifier.","label":"Campaign ID"},{"id":"name","name":"Product name","type":"text","required":false,"description":"Commercial name of the product.","label":"Product name"},{"id":"channel","name":"Channel","type":"text","required":false,"description":"Primary promotion channel (email, social, offline).","label":"Channel"},{"id":"startDate","name":"Start date","type":"date","required":false,"description":"Campaign start date.","label":"Start date"},{"id":"budget","name":"Budget","type":"number","required":false,"description":"Allocated budget for the campaign.","label":"Budget"}];

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

customElements.define("product-launch-catalog-update-promotion-launch-marketing-campaign", ProductLaunchCatalogUpdatePromotionLaunchMarketingCampaign);
export default ProductLaunchCatalogUpdatePromotionLaunchMarketingCampaign;
