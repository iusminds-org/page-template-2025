import { useEffect } from 'react';

export default function Calendar() {
  useEffect(() => {
    const head = document.querySelector('head');
    if (head) {
      const script = document.createElement('script');
      script.setAttribute(
        'src',
        'https://assets.calendly.com/assets/external/widget.js'
      );
      head.appendChild(script);

      return () => {
        // Cleanup if necessary
        if (head.contains(script)) {
          head.removeChild(script);
        }
      };
    }
    return undefined;
  }, []);
  return (
    <section>
      <div id="calendar" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-2">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Reach goals that matter
            </div>
            <h1
              className={`w-full my-2 text-5xl font-bold leading-tight text-center text-border`}
            >
              Secure Your Free Strategy Call
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Book a free call today and discover how our 24/7 live chat can
              convert your visitors into clients. Let’s discuss your goals and
              boost your business growth!
            </p>
          </div>

          <div id="schedule_form">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/i-singh423/30min"
              style={{ minWidth: '320px', height: '580px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
