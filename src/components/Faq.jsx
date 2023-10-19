const Faq = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl text-pink-700 font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-8 mb-8 max-w-4/6 mx-auto text-gray-500 text-center">
            Find instant answers to common queries with our comprehensive FAQ
            section, simplifying your event planning journey
          </p>
        </div>
        <div className="space-y-4 w-4/6 mx-auto">
          <details className="border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none font-semibold">
              WHAT SHIPPING METHODS ARE AVAILABLE?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              We ship our products by trusted and large courier services in
              Bangladesh. Currently shipping methods are available like Pathao,
              SA Paribahan, Sundorban Courier Services, etc.
            </p>
          </details>
          <details className="border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none font-semibold">
              HOW LONG WILL IT TAKE TO GET MY PACKAGE?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Inside Dhaka: 72 Hours, Outside Dhaka: 100-120 Hours Delivery
              charges: Inside Dhaka: 60tk Outside Dhaka: 120tk
            </p>
          </details>
          <details className="border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none font-semibold">
            WHAT PAYMENT METHODS ARE ACCEPTED?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            We accept payment via Bkash, Nagad, Rocket and visa card payment system.
            </p>
          </details>
          <details className="border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none font-semibold">
            HOW CAN I CANCEL OR CHANGE MY ORDER?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            You have the option to cancel your order. You can contact our customer service staff if you have a valid reason for cancelling an order. After further inspection, if the cause appears to be valid to us, we will refund your entire payment, including the cost of shipping.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
