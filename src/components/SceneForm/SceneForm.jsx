import { useEffect, useState } from "react";
import "./SceneForm.css";

function SceneForm({
  onSubmit,
  initialData = null,
  submitText = "Salvar cena",
}) {
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [moment, setMoment] = useState("");
  const [colors, setColors] = useState("");
  const [fixtures, setFixtures] = useState("");
  const [movement, setMovement] = useState("");
  const [intensity, setIntensity] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!initialData) return;

    setTitle(initialData.title || "");
    setEventType(initialData.eventType || "");
    setMoment(initialData.moment || "");
    setColors(initialData.colors?.join(", ") || "");
    setFixtures(initialData.fixtures?.join(", ") || "");
    setMovement(initialData.movement || "");
    setIntensity(initialData.intensity || "");
    setNotes(initialData.notes || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      eventType,
      moment,
      colors: colors.split(",").map((item) => item.trim()),
      fixtures: fixtures.split(",").map((item) => item.trim()),
      movement,
      intensity,
      notes,
    }).then(() => {
      if (!initialData) {
        setTitle("");
        setEventType("");
        setMoment("");
        setColors("");
        setFixtures("");
        setMovement("");
        setIntensity("");
        setNotes("");
      }
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
      <div className="library__form-select-wrapper">
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          required
        >
          <option value="">Tipo de evento</option>
          <option value="Casamento">Casamento</option>
          <option value="15 Anos">15 Anos</option>
          <option value="Corporativo">Corporativo</option>
          <option value="Show">Show</option>
          <option value="Formatura">Formatura</option>
        </select>
      </div>

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

      <select value={movement} onChange={(e) => setMovement(e.target.value)}>
        <option value="">Movimento</option>
        <option value="Parado">Parado</option>
        <option value="Lento">Lento</option>
        <option value="Médio">Médio</option>
        <option value="Rápido">Rápido</option>
      </select>

      <select value={intensity} onChange={(e) => setIntensity(e.target.value)}>
        <option value="">Intensidade</option>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
        <option value="Máxima">Máxima</option>
      </select>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Observações"
      />

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default SceneForm;
