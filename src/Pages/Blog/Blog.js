import React from "react";

const Blog = () => {
  return (
    <section className="checkout py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="question-box text-start p-4 rounded-4 bg-light mb-4">
              <h4 className="fw-bold">1. what is `cors`?</h4>
              <p>
                CORS stands for Cross-Origin Resource Sharing. It allows us to
                relax the security applied to an API. This is done by bypassing
                the Access-Control-Allow-Origin headers, which specify which
                origins can access the API. In other words, CORS is a browser
                security feature that restricts cross-origin HTTP requests with
                other servers and specifies which domains access your resources.
              </p>
            </div>
            <div className="question-box text-start p-4 rounded-4 bg-light mb-4">
              <h4 className="fw-bold">
                2. Why are you using `firebase`? What other options do you have
                to implement authentication?
              </h4>
              <p>
                Google Analytics for Firebase allows you to track your users'
                journey through realtime and custom reporting. As mentioned
                previously, Firebase supports IOS, Android, Web, and Unity
                products, allowing you to track your users across a wide range
                of devices. Google Analytics for Firebase allows you to track
                your users’ <br /> journey through realtime and custom
                reporting. As mentioned previously, Firebase supports IOS,
                Android, Web, and Unity products, allowing you to track your
                users across a wide range of devices. According to Google,
                Firebase provides unlimited free reporting on up to 500 distinct
                events. Just like the regular Google Analytics, Google Analytics
                for Firebase automatically tracks certain key events and user
                parameters straight out of the box, and allows you to define
                custom events that are important to your application.
              </p>
            </div>
            <div className="question-box text-start p-4 rounded-4 bg-light mb-4">
              <h4 className="fw-bold">3. How does the private route work?</h4>
              <p>
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
            </div>
            <div className="question-box text-start p-4 rounded-4 bg-light mb-4">
              <h4 className="fw-bold">4. What is Node? How does Node work?</h4>
              <p>
                Node. js is a JavaScript runtime environment that achieves low
                latency and high throughput by taking a “non-blocking” approach
                to serving requests. In other words, Node. js wastes no time or
                resources on waiting for I/O requests to return. <br />t is a
                used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
