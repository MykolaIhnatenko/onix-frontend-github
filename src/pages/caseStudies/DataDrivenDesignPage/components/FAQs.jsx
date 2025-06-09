import React, { useState } from 'react';

import FAQsItem from './FAQsItem';

import styles from '../sass/FAQs.module.scss';

function FAQs() {
  const [enableItemId, setEnableItemId] = useState(null);

  const handleItem = (id) => {
    setEnableItemId(enableItemId === id ? null : id);
  };

  return (
    <div className={styles.faqsContainer}>
      <h2 className={styles.title}>FAQs</h2>
      <div className={styles.itemsContainer}>
        <FAQsItem
          itemId={1}
          title="What is UI design?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            UI refers to a “user interface”, the point of the users’
            interaction with a digital product, system, or service.
            UI design aims to visually guide users through it and arrange a product’s
            graphical layout and content into a consistent and aesthetically
            pleasing experience that modern users expect.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={2}
          title="What does UX stand for?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            UX is short for “user experience”, which encompasses all
            aspects of the end-users’ interaction with a digital product,
            including personal emotions and attitudes. UX design is a
            human-first way of developing and improving all the elements
            that shape this experience so as to make it easy, efficient,
            relevant, and delightful for as many users as possible.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={3}
          title="What do UX and UI designers do?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            First, a UX designer conducts user research to discover the target audience’s
            needs related to a digital product, the steps its users need to take and the
            tasks to complete, the problems and pain points they may face, and the ways
            to solve them. Then, the designer maps out the entire user’s journey across
            the product, considering things like information architecture and the necessary
            product features. Finally, simple wireframes or clickable prototype is created
            to present the skeleton of the product.
          </p>
          <br />
          <p>
            The UI designer brings the blueprints to life. Working with icons,
            buttons, typography, color schemes, spacing, imagery, brand’s visual
            assets, and other visual or interactive elements, they develop the
            individual screen layouts, all possible users’ actions, such as
            tapping the buttons, scrolls, and swipes, and the interface’s
            reactions, e.g., transitions, animations, popups, etc. To make
            the user journey truly intuitive, the designer may need to
            address details like color combinations that enhance readability or
            cater to color-blind users.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={4}
          title="What is the difference between UI and UX design?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            UX design is a cognitive science practice that focuses on identifying
            and solving user problems and creating the overall digital experience.
            UI design is its complement that takes care of how interfaces look and
            function, i.e. the visuals, presentation, and interactivity of a website
            or application. Since both elements are essential for the product’s
            success and work closely together, our designers create, measure,
            analyze, and improve UI as an intrinsical part of UX design processes.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={5}
          title="What is data-driven design?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            Data-driven design (DDD) can be defined as product development backed
            by quantitative data that helps understand the target audience.
            Every design decision is made and evaluated based solely on things that can be measured.
          </p>
          <br />
          <p>
            DDD is most appropriate when the team focuses on the optimization
            and efficiencies of a product. It’s necessary to measure design
            efficiency and get up-to-date information on how good a product’s UX and UI are.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={6}
          title="How do they measure design efficiency?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            Only things that can be measured can be improved. When you assess a website’s
            or app’s efficiency and how the implemented UI/UX solutions further business
            goals, special metrics can turn various data about the users’ behavior and
            interaction with the interface into digestible information, helping draw
            conclusions and make decisions.
          </p>
          <br />
          <p>
            Particularly, design metrics can tell you whether one version of your
            design is better than another, show you what exactly users are doing
            with your product and probably even explain why, and provide insights
            into the problems you need to solve.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={7}
          title="How to measure user experience?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            Measuring user experience implies observing how users perform specific tasks,
            how easy it is for them, whether they encounter any difficulties, whether they are engaged, etc.
          </p>
          <br />
          <p>
            UX metrics are the solution. They quantify various aspects of the user
            experience, e.g., counting the average number of minutes spent in the app
            daily to help evaluate the users’ involvement or even satisfaction with the product.
          </p>
          <br />
          <p>
            UX metrics can be divided into two categories: attitudinal and behavioral.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={8}
          title="What are attitudinal UX metrics?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            Attitudinal UX metrics show how users feel about a product and brand,
            which you can learn directly from customer feedback, including opinions,
            complaints, and suggestions. These metrics often require running surveys, for example:
          </p>
          <br />
          <ul>
            <li>System usability scale (SUS)</li>
            <li>Net promoter score (NPS)</li>
            <li>Customer satisfaction (CSAT)</li>
          </ul>
        </FAQsItem>
        <FAQsItem
          itemId={9}
          title="What are behavioral UX metrics?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <p>
            Behavioral UX metrics help understand how people really use and what
            they do in a digital product, where they come from, what problems they
            encounter and where, etc. The main metrics are monitored using specialized
            tools and services, the most popular including Google Analytics, Hotjar,
            Mixpanel, Heap, Localytics, Kissmetrics, Crashlytics, Firebase, and Crazy
            Egg. For example, mouse movement and click-tracking heat maps show how users
            interact with the product at each step of their journey.
          </p>
        </FAQsItem>
        <FAQsItem
          itemId={10}
          title="When is it best to measure design?"
          onItemClick={handleItem}
          enableItem={enableItemId}
        >
          <ol>
            <li>
              <strong>Before launching the product. </strong>
              Before release, it’s recommended to prepare the website or app to collect
              the necessary UX data generated by early adopters. To
              connect Google Analytics to the system, specialists
              just need to install a small block of JavaScript code on the web pages.
            </li>
            <li>
              <strong>Before planned product improvement. </strong>
              This may happen before a routine design sprint,
              after a problem has been identified (e.g., increased user churn), or following a
              full-scale UX review that pinpointed usability flaws in your product and defined
              key areas to improve. Before implementing any changes, it’s recommended to gather
              data going 1-2 months back.
            </li>
            <li>
              <strong>After redesign. </strong>
              After implementing the improvements, the team has to measure the
              selected KPIs and compare them with past indicators to see if the
              changes have reached the goals.
            </li>
          </ol>
          <br />
          <p>
            Digital product design requires constant improvement. Regular
            measuring user experience will help maintain control over
            the customers’ behavior and actions and, ultimately, the bottom line.
          </p>
        </FAQsItem>
      </div>
    </div>
  );
}

export default FAQs;
