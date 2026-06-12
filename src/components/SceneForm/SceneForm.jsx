import { useState } from "react";

function SceneForm({ onCreateScene }) {
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [moment, setMoment] = useState("");
  const [colors, setColors] = useState("");
  const [fixtures, setFixtures] = useState("");
  const [movement, setMovement] = useState("");
  const [intensity, setIntensity] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreateScene({
      title,
      eventType,
      moment,
      colors: colors.split(",").map((color) => color.trim()),
      fixtures: fixtures.split(",").map((fixture) => fixture.trim()),
      movement,
      intensity,
      notes,
    }).then(() => {
      setTitle("");
      setEventType("");
      setMoment("");
      setColors("");
      setFixtures("");
      setMovement("");
      setIntensity("");
      setNotes("");
    });
  };

  return (
    <form className="library__form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nome da cena"
        required
        minLength="2"
        maxLength="60"
      />
      <input
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        placeholder="Tipo de evento"
        required
      />
      <input
        value={moment}
        onChange={(e) => setMoment(e.target.value)}
        placeholder="Momento"
        required
      />
      <input
        value={colors}
        onChange={(e) => setColors(e.target.value)}
        placeholder="Cores separadas por vírgula"
        required
      />
      <input
        value={fixtures}
        onChange={(e) => setFixtures(e.target.value)}
        placeholder="Equipamentos separados por vírgula"
        required
      />
      <input
        value={movement}
        onChange={(e) => setMovement(e.target.value)}
        placeholder="Movimento"
        required
      />
      <input
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}
        placeholder="Intensidade"
        required
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Observações"
      />

      <button type="submit">Salvar cena</button>
    </form>
  );
}

export default SceneForm;
