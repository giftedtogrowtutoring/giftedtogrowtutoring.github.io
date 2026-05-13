function App() {
  const [audience, setAudience] = React.useState("anxious");
  const [contactOpen, setContactOpen] = React.useState(false);

  // Re-render Lucide icons whenever the React tree changes.
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <>
      <Nav onContact={() => setContactOpen(true)} />
      <main>
        <Hero
          onContact={() => setContactOpen(true)}
          audience={audience}
          onPickAudience={setAudience}
        />
        <PlantTheSeed />
        <TendTheRoots audience={audience} />
        <AboutJennifer />
        <BearFruit />
        <FaithSection />
        <JoinTheGarden onContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
