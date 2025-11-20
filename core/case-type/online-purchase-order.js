const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class OnlinePurchaseOrderCase extends BlazeCase {
  constructor() {
    super(
      "online-purchase-order",
      "Online Purchase Order",
      [
{
      id: "Order_Placement",
      label: "Order Placement",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "online-purchase-order-order-placement-start",
          dataModelReference: { models: [] }
        },
{
          id: "order.place.capture",
          label: "Capture customer & cart",
          type: "manual",
          status: "pending",
          view: "online-purchase-order-order-placement-capture-customer-&-cart",
          dataModelReference: { models: ["customerId", "fullName", "email", "productId", "sku", "price", "totalAmount", "shippingAddress"] },
          routingConfig:           {
            "routeTo": "TaskQueue",
            "taskQueue": {
              "id": "userqueueu"
            }
          }
        },
{
          id: "order.place.payment",
          label: "Payment submission",
          type: "manual",
          status: "pending",
          view: "online-purchase-order-order-placement-payment-submission",
          dataModelReference: { models: ["paymentId", "orderId", "method", "amount", "paymentDate", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "online-purchase-order-order-placement-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Fulfillment",
      label: "Fulfillment",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "online-purchase-order-fulfillment-start",
          dataModelReference: { models: [] }
        },
{
          id: "order.fulfill.reserveStock",
          label: "Reserve stock & allocate",
          type: "manual",
          status: "pending",
          view: "online-purchase-order-fulfillment-reserve-stock-&-allocate",
          dataModelReference: { models: ["productIdRef", "stockLevel", "inventoryId", "location"] }
        },
{
          id: "order.fulfill.pack",
          label: "Pack & handover to shipper",
          type: "manual",
          status: "pending",
          view: "online-purchase-order-fulfillment-pack-&-handover-to-shipper",
          dataModelReference: { models: ["orderId", "shippingAddress", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "online-purchase-order-fulfillment-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Delivery_&_Aftercare",
      label: "Delivery & Aftercare",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "online-purchase-order-delivery-&-aftercare-start",
          dataModelReference: { models: [] }
        },
{
          id: "order.delivery.ship",
          label: "Ship & confirm delivery",
          type: "manual",
          status: "pending",
          view: "online-purchase-order-delivery-&-aftercare-ship-&-confirm-delivery",
          dataModelReference: { models: ["orderId", "status", "shippingAddress"] }
        },
{
          id: "order.delivery.aftercare",
          label: "Aftercare / returns intake",
          type: "manual",
          status: "pending",
          view: "online-purchase-order-delivery-&-aftercare-aftercare-/-returns-intake",
          dataModelReference: { models: ["orderId", "customerIdRef", "returnId"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "online-purchase-order-delivery-&-aftercare-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new OnlinePurchaseOrderCase();