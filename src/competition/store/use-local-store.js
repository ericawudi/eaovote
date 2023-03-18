import { useState, useEffect } from "react";

const STORE_NAME = "eavote-competition";

export default function useLocalStore() {
  const [store, setStore] = useState({});

  const addToStore = (data) => setStore(data);
}
