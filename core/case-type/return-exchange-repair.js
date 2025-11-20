const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class Return,Exchange&RepairCase extends BlazeCase {
  constructor() {
    super(
      "return-exchange-repair",
      "Return, Exchange & Repair",
      [
{
      id: "Request_&_Authorization",
      label: "Request & Authorization",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "return,-exchange-&-repair-request-&-authorization-start",
          dataModelReference: { models: [] }
        },
{
          id: "returns.request.create",
          label: "Customer requests return / exchange / repair",
          type: "manual",
          status: "pending",
          view: "return,-exchange-&-repair-request-&-authorization-customer-requests-return-/-exchange-/-repair",
          dataModelReference: { models: ["returnId", "orderIdRef", "productIdRef", "reason", "requestedResolution"] },
          routingConfig:           {
            "routeTo": "AnotherUser"
          }
        },
{
          id: "returns.auth.evaluate",
          label: "Evaluate eligibility & authorize",
          type: "manual",
          status: "pending",
          view: "return,-exchange-&-repair-request-&-authorization-evaluate-eligibility-&-authorize",
          dataModelReference: { models: ["returnId", "status", "inspectedAt"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "return,-exchange-&-repair-request-&-authorization-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Logistics_&_Inspection",
      label: "Logistics & Inspection",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "return,-exchange-&-repair-logistics-&-inspection-start",
          dataModelReference: { models: [] }
        },
{
          id: "returns.ship.receive",
          label: "Arrange return shipping & receive item",
          type: "manual",
          status: "pending",
          view: "return,-exchange-&-repair-logistics-&-inspection-arrange-return-shipping-&-receive-item",
          dataModelReference: { models: ["returnId", "orderIdRef", "productIdRef"] }
        },
{
          id: "returns.inspect.condition",
          label: "Inspect item condition",
          type: "manual",
          status: "pending",
          view: "return,-exchange-&-repair-logistics-&-inspection-inspect-item-condition",
          dataModelReference: { models: ["returnId", "inspectedAt", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "return,-exchange-&-repair-logistics-&-inspection-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Resolution_&_Closure",
      label: "Resolution & Closure",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "return,-exchange-&-repair-resolution-&-closure-start",
          dataModelReference: { models: [] }
        },
{
          id: "returns.resolution.execute",
          label: "Execute refund / exchange / repair",
          type: "manual",
          status: "pending",
          view: "return,-exchange-&-repair-resolution-&-closure-execute-refund-/-exchange-/-repair",
          dataModelReference: { models: ["returnId", "requestedResolution", "paymentId", "status"] }
        },
{
          id: "returns.close.complete",
          label: "Close case & notify customer",
          type: "manual",
          status: "pending",
          view: "return,-exchange-&-repair-resolution-&-closure-close-case-&-notify-customer",
          dataModelReference: { models: ["returnId", "status", "orderIdRef"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "return,-exchange-&-repair-resolution-&-closure-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new Return,Exchange&RepairCase();