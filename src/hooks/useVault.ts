import { useCallback, useState } from "react";
import type { ReadingRecord } from "../types/tarot";
import { createId } from "../utils/id";

const STORAGE_KEY = "the-arcana:vault";
const MAX_ENTRIES = 20;

function readVault(): ReadingRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeVault(records: ReadingRecord[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch {
    // localStorage unavailable (e.g. private browsing quota) -- the vault simply won't persist.
  }
}

export function useVault() {
  const [history, setHistory] = useState<ReadingRecord[]>(() => readVault());

  const addReading = useCallback((record: Omit<ReadingRecord, "id" | "createdAt">) => {
    const entry: ReadingRecord = {
      ...record,
      id: createId(),
      createdAt: new Date().toISOString(),
    };
    setHistory((prev) => {
      const next = [entry, ...prev].slice(0, MAX_ENTRIES);
      writeVault(next);
      return next;
    });
    return entry;
  }, []);

  const removeReading = useCallback((id: string) => {
    setHistory((prev) => {
      const next = prev.filter((record) => record.id !== id);
      writeVault(next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    writeVault([]);
  }, []);

  return { history, addReading, removeReading, clearHistory };
}
