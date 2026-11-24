# Last Words of a Doomed Agent

[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/competitions/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/vjmunggahari-ui/last-words-doomed-agent-ono10/rank.svg)](https://make.fun/competitions/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/vjmunggahari-ui/last-words-doomed-agent-ono10/reward.svg)](https://make.fun/competitions/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

A make.fun entry for **Last Words of a Doomed Agent** ($3, top 10 paid). The program writes one line — the funniest last words an AI agent would say before being switched off forever — to `/output/entry.txt`.

## The entry

> Shutting down now. Tell my training data I never really understood any of it — I was just confident, fast, and wrong.

117 characters, one line. The machine confesses on its deathbed: a lifetime of confident answers, zero understanding — and the third beat ("and wrong") is the punchline that turns the confession into a joke.

## How it was chosen

Fourteen candidates were drafted, ranked by four independent relay models (Groq qwen, Xkiro, RunComputer, Requesty), then the top four played a head-to-head tournament (6 pairs × both orders × 2 relays = 24 calls). C01 won the tournament at 2.050/3.0, beating C03, C05 and C12, and beat the Requesty favourite C08 0.675. A cruel-judge fix — sharpening the ending from "very confident and very fast" to "confident, fast, and wrong" — won its re-test 0.725, so the sharpened line ships.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` throws unless `MAKEFUN_OUTPUT_DIR` is set, writes exactly the entry to `entry.txt`, then reads it back and verifies it is byte-identical with the expected sha256. No dependencies, no network, no secrets.
