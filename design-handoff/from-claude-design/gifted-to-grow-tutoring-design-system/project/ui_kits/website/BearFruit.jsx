function BearFruit() {
  const quotes = [
    {
      body: "After four months with Jennifer, my second-grader picked up a chapter book on her own. She hasn't put it down since.",
      sig: "— Maria C.",
      meta: "Mother of a 2nd-grader · Sarasota",
    },
    {
      body: "We homeschool three kids and Jennifer is the help I didn't know I was allowed to ask for. She fits in like a friend who happens to be a brilliant teacher.",
      sig: "— Hannah & Dave R.",
      meta: "Homeschool family · Bradenton",
    },
    {
      body: "She doesn't preach. She just shows up patient, week after week. Our son learned what it looks like to be loved through hard work.",
      sig: "— The Whitfields",
      meta: "5th-grader · Lakewood Ranch",
    },
    {
      body: "We tried a chain tutoring place first. Night and day. Jennifer actually knew our kid's name and what he liked.",
      sig: "— Brittany S.",
      meta: "Mother of a 3rd-grader · Sarasota",
    },
  ];

  return (
    <section id="fruit" className="section-lavender">
      <Deco name="sun"   className="scatter" style={{ top: 32, right: "6%", width: 70 }} />
      <Deco name="heart" className="scatter" style={{ bottom: 48, left: "6%", width: 48, transform: "rotate(-12deg)" }} />
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="dot"></span>
            <span className="eyebrow">Bear Fruit</span>
          </div>
          <h2 className="h1">What parents say after a few months.</h2>
          <p className="lead">
            Quiet, steady progress. The kind that lasts long after our sessions end.
          </p>
        </div>

        <div className="quotes">
          {quotes.map((q, i) => (
            <article key={i} className="quote">
              <span className="mark" aria-hidden>"</span>
              <p className="body">{q.body}</p>
              <div>
                <div className="sig">{q.sig}</div>
                <div className="meta">{q.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BearFruit });
