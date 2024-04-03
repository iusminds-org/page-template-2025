import jsPDF from 'jspdf';

import Footer from '../components/Footer';
import LazyShow from '../components/LazyShow';
import Menu from '../components/Menu';

const CV: React.FC = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content');

    if (input) {
      const contentHeight = input.clientHeight;
      const pageHeight = contentHeight + 40;

      // eslint-disable-next-line new-cap
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: [input.clientWidth, pageHeight],
      });

      pdf.html(input, {
        callback: () => {
          pdf.save('HanahCV.pdf');
        },
      });
    }
  };

  return (
    <div className="bg-background grid overflow-hidden">
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 bg-background lg:max-w-2xl lg:w-full">
            <Menu />
          </div>
        </div>
      </div>
      <LazyShow>
        <div className="py-12 bg-background" id="pdf-content">
          <div className="sm:text-center lg:text-left">
            <h3 className="w-full my-2 text-5xl font-bold leading-tight text-center text-lime-600 mb-8">
              Hannah Baker
            </h3>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="md:flex">
                <dt className="font-semibold tracking-wide text-lg uppercase text-yellow-500 md:w-1/6">
                  <h2 className="text-lime-600 font-semibold tracking-wide uppercase mt-2 text-2xl leading-8">
                    Summary
                  </h2>
                </dt>
                <dd className="mt-1 text-base text-yellow-500 md:w-2/3">
                  <p className="max-w-2xl text-xl text-yellow-500 lg:mx-auto">
                    Results-oriented Backend Software Engineer specialising in
                    the development of complex data intensive systems,
                    prioritising scalability and site reliability. Proficient in
                    server-side programming languages such as C# and Golang,
                    complemented by exposure to Ruby on Rails. Leveraging
                    popular frameworks like .NET and Rails, I excel in building
                    and maintaining robust web applications. My expertise
                    extends to proficiently managing both SQL and NoSQL
                    databases, optimising intricate queries for efficiency. With
                    a solid foundation in cloud computing platforms, including
                    AWS and Azure, I bring a wealth of experience in deploying
                    and managing applications at scale. Passionate about backend
                    engineering, my true calling has been discovered within
                    product teams. I am driven to utilise my skills to craft
                    innovative solutions and features that elevate user
                    experiences. Having successfully transitioned from a Site
                    Reliability Engineer (SRE) role, I find greater fulfilment
                    and motivation in the dynamic and collaborative environment
                    of product-focused teams. My commitment is to contribute to
                    the success of projects by combining technical excellence
                    with a passion for enhancing the overall user journey.
                  </p>
                </dd>
              </div>
            </dl>
            <h2 className="text-lime-600 font-semibold tracking-wide uppercase mt-4 text-2xl leading-8">
              Experience
            </h2>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                <div className="md:flex">
                  <dt className="font-semibold tracking-wide text-lg uppercase text-yellow-500 md:w-1/6">
                    Deliveroo
                  </dt>
                  <dd className="mt-1 text-base text-yellow-500 md:w-2/3">
                    <em>
                      An online food delivery company operating in the UK and
                      globally.
                    </em>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Site Reliability Engineer -{' '}
                      <em> JANUARY 2023 - MARCH 2024, REMOTE </em>
                    </h2>
                    <ul className="list-disc mt-2">
                      <li>
                        Single-handedly Developed a Global Repair Item tracking
                        system to address large-scale vulnerabilities across
                        multiple teams.
                      </li>
                      <li>
                        Spearheaded the design and development of DEFCON, a
                        critical mechanism ensuring customer checkout during
                        live incidents. Collaborated with downstream services,
                        enhancing integration for optimal performance.
                      </li>
                      <li>
                        Worked across engineering teams to establish SLOs and
                        SLAs, fostering a culture of reliability and latency
                        awareness.
                      </li>
                      <li>
                        Engaged with engineering heads to comprehend the system
                        design for overall code reliability improvement.
                      </li>
                      <li>
                        Led Gameday group initiatives, enhancing site
                        reliability and engineering response during system
                        outages.
                      </li>
                      <li>
                        Single Handedly set up infrastructure, frontend, and
                        backend for the DEFCON project, contributing to generic
                        templating codebases.
                      </li>
                    </ul>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Software Engineer II -{' '}
                      <em> MAY 2022 - DECEMBER 2022, REMOTE </em>
                    </h2>
                    <ul className="list-disc mt-2">
                      <li>
                        Core member of the Promotions team, implemented and
                        maintained all promotions throughout the site serving a
                        global market of 301 million.
                      </li>
                      <li>
                        Led the project on existing customer promotions launched
                        on December 2022, enabling the company to target and
                        tailor the promotions to consumers with specific
                        characteristics.
                      </li>
                      <li>
                        Implemented cross-team consumer features to provide a
                        better consumer promotions experience.
                      </li>
                      <li>
                        Built tooling for marketing to maintain all promotions
                        across all markets.
                      </li>
                      <li>
                        Managed the onboarding of new engineers to our team.
                      </li>
                    </ul>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Technologies:
                    </h2>
                    <p className="font-semibold text-yellow-400">
                      Golang, Terraform, DynamoDB, Aurora Postgres, Docker,
                      Kafka, GRPC, CircleCi, API Gateway, Lambda, EC2, Redis,
                      Datadog, Sentry, React, Typescript, Express, NextJS, Ruby
                      on Rails.
                    </p>
                  </dd>
                </div>
                <div className="md:flex">
                  <dt className="font-semibold tracking-wide text-lg uppercase text-yellow-500 md:w-1/6">
                    Aire Logic
                  </dt>
                  <dd className="mt-1 text-base text-yellow-500 md:w-2/3">
                    <em>
                      A UK-based IT consultancy primarily focused on improving
                      healthcare systems.
                    </em>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Full stack Developer -{' '}
                      <em> JANUARY 2021 - MAY 2022, REMOTE </em>
                    </h2>
                    <ul className="list-disc mt-2">
                      <li>
                        Implemented, innovated, and improved modular services
                        for healthcare systems.
                      </li>
                      <li>
                        Collaborated on the LTHT - EHR modernisation project,
                        upgrading .NET Framework core to .NET Standard for
                        seamless migration to Azure.
                      </li>
                      <li>
                        Optimised Docker images for speed, dependability, and
                        cost-effectiveness, integrating enhanced security
                        measures.
                      </li>
                      <li>
                        Significantly improved scripting and local build speed,
                        reducing it from 40 minutes to less than a minute.
                      </li>
                      <li>
                        Configured, maintained, and enhanced Azure DevOps CI/CD
                        Pipelines.
                      </li>
                      <li>
                        Assisted in configuring JIRA for visualising story
                        progress across multiple boards and teams.
                      </li>
                    </ul>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Technologies:
                    </h2>
                    <p className="font-semibold text-yellow-400">
                      C# (.NET Core, .NET Standard, .NET Framework), Docker,
                      Rancher, Azure Pipelines, CircleCi, Powershell, Lambda,
                      MongoDB, Postgres, GRPC, XML, Liquid Templating React,
                      Typescript, Nunit, Xunit, Jest, TestCafe.
                    </p>
                  </dd>
                </div>
                <div className="md:flex">
                  <dt className="font-semibold tracking-wide text-lg uppercase text-yellow-500 md:w-1/6">
                    Jet2.com
                  </dt>
                  <dd className="mt-1 text-base text-yellow-500 md:w-2/3">
                    <em>
                      A leading leisure airline and package holiday provider.
                    </em>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Backend Software Engineer -{' '}
                      <em> JANUARY 2019 - JANUARY 2021, LEEDS </em>
                    </h2>
                    <ul className="list-disc mt-2">
                      <li>
                        Authored clean, clear, and well-tested code for the
                        multi-destination search project, particularly
                        contributing to the high-performance pricing engine.
                        Achieved the industry&apos;s fastest search engine upon
                        its 2020 launch.
                      </li>
                      <li>
                        Utilised technologies such as Kafka, Docker, Kubernetes,
                        and Sitecore to deliver features in both existing and
                        greenfield .NET applications.
                      </li>
                      <li>
                        Proficient in asynchronous programming, working with
                        regular C# tasks and Akka .Net, acquired during the
                        multi-search project.
                      </li>
                      <li>
                        Conducted automation testing using Specflow to ensure
                        software quality before deployment.
                      </li>
                      <li>
                        Built, tested, and deployed scalable, containerized
                        software applications.
                      </li>
                      <li>
                        Improved accuracy and reporting for Kibana dashboards.
                      </li>
                      <li>
                        Trained new developers, offering resolutions to issues,
                        and promoted best practices.
                      </li>
                      <li>
                        Documented technical workflows and knowledge in the
                        private wiki for onboarding new employees.
                      </li>
                    </ul>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Technologies:
                    </h2>
                    <p className="font-semibold text-yellow-400">
                      .NET C#, SQL, Akka.NET, Kafka, Docker, Sitecore, Jenkins,
                      Nunit, Xunit, Docker, Kafka, Rancher, Gherkin, Specflow,
                      Azure Pipelines, Kibana.
                    </p>
                  </dd>
                </div>
                <div className="md:flex">
                  <dt className="font-semibold tracking-wide text-lg uppercase text-yellow-500 md:w-1/6">
                    Keyloop - EnquiryMax
                  </dt>
                  <dd className="mt-1 text-base text-yellow-500 md:w-2/3">
                    <em>
                      A leading LMS provider within the automotive industry.
                    </em>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Full stack Developer -{' '}
                      <em> AUGUST 2017 - JANUARY 2019, LEEDS </em>
                    </h2>
                    <ul className="list-disc mt-2">
                      <li>
                        Collaborated with project managers on large-scale
                        solutions, setting ambitious yet realistic coding
                        milestones for pre-release software project development.
                      </li>
                      <li>
                        Single-handedly implemented the TCF module for retailer
                        groups, including JLR UK, Sytner, and Inchcape.
                      </li>
                      <li>
                        Contributed to the initial implementation of a system
                        for bulk purchasing company cars.
                      </li>
                      <li>
                        Pioneered the e-signature feature, enabling customers to
                        buy new cars remotely.
                      </li>
                      <li>
                        Designed, authored, and deployed scheduler apps for
                        automating reporting and maintained the national
                        reporting system for JLR UK.
                      </li>
                    </ul>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Technologies:
                    </h2>
                    <p className="font-semibold text-yellow-400">
                      .NET C#, SQL, AngularJS, VueJS, Javascript, JQuery, MySQL,
                      Liquid Templating, AWS S3
                    </p>
                  </dd>
                </div>
                <div className="md:flex">
                  <dt className="font-semibold tracking-wide text-lg uppercase text-yellow-500 md:w-1/6">
                    WorkClever Digital
                  </dt>
                  <dd className="mt-1 text-base text-yellow-500 md:w-2/3">
                    <em>
                      A leading LMS provider within the automotive industry.
                    </em>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Apprentice - Junior Software Developer -{' '}
                      <em> JUNE 2016 - JULY 2017, CARLISLE </em>
                    </h2>
                    <h2 className="font-semibold uppercase text-green-600 mt-2">
                      Technologies:
                    </h2>
                    <p className="font-semibold text-yellow-400">
                      .NET C#, .NET VB, SQL, Javascript, JQuery, PHP
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </LazyShow>
      <div className="py-12h-screen flex items-center justify-center">
        <button
          className="w-2/5 my-2 absolute flex items-center justify-center h-12 rounded-md text-tertiary border-lime-600 border-4"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
      <LazyShow>
        <>
          <Footer />
        </>
      </LazyShow>
    </div>
  );
};

export default CV;
