
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class CustomTailoringRequestRequestDesignSubmitRequestMeasurements extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"requestId","name":"Request ID","type":"text","required":false,"description":"Unique identifier for a tailoring request.","label":"Request ID"},{"id":"customerIdRef","name":"Customer reference","type":"text","required":false,"description":"Reference to the placing customer.","label":"Customer reference"},{"id":"designReference","name":"Design reference","type":"text","required":false,"description":"Reference to chosen design or moodboard.","label":"Design reference"},{"id":"measurements","name":"Measurements","type":"text","required":false,"description":"Customer measurements and fitting notes.","label":"Measurements"},{"id":"agreedPrice","name":"Agreed price","type":"number","required":false,"description":"Final agreed price for the bespoke work.","label":"Agreed price"}];

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

customElements.define("custom-tailoring-request-request-design-submit-request-measurements", CustomTailoringRequestRequestDesignSubmitRequestMeasurements);
export default CustomTailoringRequestRequestDesignSubmitRequestMeasurements;
