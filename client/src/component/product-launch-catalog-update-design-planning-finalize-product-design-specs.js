
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ProductLaunchCatalogUpdateDesignPlanningFinalizeProductDesignSpecs extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"productId","name":"Product ID","type":"text","required":false,"description":"Unique product identifier or SKU.","label":"Product ID"},{"id":"name","name":"Product name","type":"text","required":false,"description":"Commercial name of the product.","label":"Product name"},{"id":"description","name":"Description","type":"text","required":false,"description":"Product description and heritage notes.","label":"Description"},{"id":"fabric","name":"Fabric","type":"text","required":false,"description":"Primary fabric or weave information.","label":"Fabric"},{"id":"category","name":"Category","type":"text","required":false,"description":"Product category (e.g., saree, sherwani, kurta).","label":"Category"}];

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

customElements.define("product-launch-catalog-update-design-planning-finalize-product-design-specs", ProductLaunchCatalogUpdateDesignPlanningFinalizeProductDesignSpecs);
export default ProductLaunchCatalogUpdateDesignPlanningFinalizeProductDesignSpecs;
