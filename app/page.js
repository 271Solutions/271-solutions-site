"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [before, setBefore] = useState("");
  const [moment, setMoment] = useState("");
  const [after, setAfter] = useState("");
  const [testimonies, setTestimonies] = useState([]);

  // 🔁 Load testimonies on page load
  useEffect(() => {
    fetchTestimonies();
  }, []);

  async function fetchTestimonies() {
    const { data, error } = await supabase
      .from("testimonies")
      .select("*")
      .order("id", { ascending: false });

    console.log("FETCH RESULT:", data, error);

    if (error) {
      console.error("Fetch error:", error);
    } else {
      setTestimonies(data || []);
    }
  }

  // ➕ Submit testimony (WITH DEBUG)
  async function handleSubmit(e) {
    e.preventDefault();

    if (!before || !moment || !after) return;

    const { data, error } = await supabase.from("testimonies").insert([
      {
        before,
        moment,
        after,
        witness: 0,
      },
    ]);

    console.log("INSERT RESULT:", data, error);

    if (error) {
      console.error("Insert error:", error);
      return;
    }

    setBefore("");
    setMoment("");
    setAfter("");

    fetchTestimonies(); // reload data
  }

  // 👍 Update witness count
  async function addWitness(id, currentCount) {
    const { data, error } = await supabase
      .from("testimonies")
      .update({ witness: currentCount + 1 })
      .eq("id", id);

    console.log("UPDATE RESULT:", data, error);

    if (error) {
      console.error("Update error:", error);
      return;
    }

    fetchTestimonies(); // reload data
  }

  return (
    <main style={styles.page}>
      <h1 style={styles.title}>1211 PROJECT</h1>
      <p style={styles.subtitle}>Real stories. Lost → Found.</p>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          placeholder="Before..."
          value={before}
          onChange={(e) => setBefore(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="The Moment..."
          value={moment}
          onChange={(e) => setMoment(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="After..."
          value={after}
          onChange={(e) => setAfter(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          SUBMIT
        </button>
      </form>

      {/* LIST */}
      <div style={styles.list}>
        {testimonies.map((t) => (
          <div key={t.id} style={styles.card}>
            <p><strong>Before:</strong> {t.before}</p>
            <p><strong>The Moment:</strong> {t.moment}</p>
            <p><strong>After:</strong> {t.after}</p>

            <button
              onClick={() => addWitness(t.id, t.witness)}
              style={styles.smallButton}
            >
              WITNESS 👍 {t.witness}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

/* STYLES */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0d0d0d",
    color: "#fff",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    fontSize: "32px",
    marginBottom: "5px",
  },

  subtitle: {
    color: "#888",
    marginBottom: "30px",
  },

  form: {
    maxWidth: "600px",
    marginBottom: "40px",
  },

  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "12px",
    background: "#1a1a1a",
    color: "#fff",
    border: "1px solid #333",
  },

  button: {
    padding: "10px 20px",
    background: "#fff",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },

  list: {
    maxWidth: "700px",
  },

  card: {
    border: "1px solid #333",
    padding: "15px",
    marginBottom: "15px",
    background: "#141414",
  },

  smallButton: {
    marginTop: "10px",
    padding: "6px 10px",
    background: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
