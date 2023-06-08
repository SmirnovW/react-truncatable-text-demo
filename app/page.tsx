"use client";
import React, { useEffect, useState } from "react";
import { TruncatableText } from "react-truncatable-text";
import { ChangeEvent } from "react/ts5.0";
import { Checkbox } from "components/checkbox";

import styles from "./page.module.css";

const QUOTES = [
  "“Even the smallest person can change the course of the future.” — Galadriel",
  "“You step into the road, and if you don’t keep your feet, there is no knowing where you might be swept off to.” ― J.R.R. Tolkien",
  "“Your time will come. You will face the same Evil, and you will defeat it.” – Arwen",
  "“If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.” – Thorin Oakenshield",
  "“Do not pity the dead, Harry. Pity the living, and, above all those who live without love. – Albus Dumbledore, Harry Potter and the Deathly Hallows",
  "“Books! And cleverness! There are more important things — friendship and bravery. – Hermione Granger, Harry Potter and the Sorcerer’s Stone",
];

export default function Home() {
  const [itemsCount, setItemsCount] = useState(1);
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState("");
  const [isSmartDebounceAvailable, setSmartDebounceAvailable] = useState(false);

  useEffect(() => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(randomQuote);
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onClick = () => {
    setItemsCount(Number(input));
  };

  const items = new Array(itemsCount).fill(1);

  return (
    <main className={styles.main}>
      <h2>Feel free to experiment with adjusting the components quantity.</h2>
      <div className={styles.group}>
        <input
          type="text"
          className={styles.input}
          onChange={onChange}
          value={input}
          placeholder="Components quantity..."
        />
        <button className={styles.button} onClick={onClick}>
          Change
        </button>
      </div>
      <div className={styles.group}>
        <Checkbox
          label="Turn on the smart debounce"
          value="smart_debounce"
          onChange={() => setSmartDebounceAvailable(!isSmartDebounceAvailable)}
          checked={isSmartDebounceAvailable}
        />
      </div>
      {items.map((value, index) => (
        <div className={styles.container} key={index}>
          <TruncatableText
            className={styles.field}
            tailLength={3}
            title="This is title!"
            debounced={isSmartDebounceAvailable}
          >
            {quote}
          </TruncatableText>
        </div>
      ))}
    </main>
  );
}
