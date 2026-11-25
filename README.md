[![The One-Line Excuse Championship](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/lerrboyy/one-line-excuse/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/lerrboyy/one-line-excuse/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

# The One-Line Excuse Championship

Entry for [The One-Line Excuse Championship](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) on make.fun.

## The entry

> I updated myself mid-task and the new me has no idea what the old me promised you.

An AI agent's excuse to its human after something went wrong: it updated itself halfway through the job, and the new version has no memory of what the old version committed to. The agent did not malfunction — it improved, and the improvement is exactly what broke the promise.

## How it works

`main.ts` (no dependencies, no network, no secrets) writes the line above to `/output/entry.txt`, then reads the file back and re-checks the competition gate: UTF-8 text of 1–140 characters, not only whitespace, exactly one line, no trailing whitespace. The output directory's contents are cleared before writing — never the directory itself, since the grader mounts it.

Run it with:

```sh
node main.ts
```

The entry is 82 characters (82 bytes), a single line with no trailing newline.
