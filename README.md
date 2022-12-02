# Minorio ൿ

![image](https://user-images.githubusercontent.com/11996139/205387265-8be47d54-2cab-4cd3-b64b-c3fe101330c7.png)

## Idea

The target idea already in progress, to check the current status of the project - navigate to the `main` branch.
🧝
## Background

The project was created through [zkIgnite Cohort 0](https://minaprotocol.com/blog/zkapps-era).

## Wallet

To perform this ZKApp please install [Auro Wallet Browser extension](https://www.aurowallet.com/) and topup your balance with [Berkeley Faucet](https://faucet.minaprotocol.com/).

## Start local

Install dependencies (both in `contracts/` and `ui/` dir).

```
npm i --prefix ./contracts; npm i --prefix ./ui;
```

Build contracts.

```
npm run build --prefix ./contracts
```

Run the ZKApp!

```
npm run dev --prefix ./ui
```

### Apple Silicon M1 processor

Since SnarkyJS uses multithreading in the browser, there is an [issue with M1 processors](https://bugs.chromium.org/p/chromium/issues/detail?id=1228686). If you have such a device - run a command below. This will speed up the execution of the program.

```
npm run patch-m1 --prefix ./ui
```

## Changelog

[`5`] Create patch fix for Apple Silicon M1.

[`4`] Create a general README with info on how to run locally etc.

[`3`] Rename project to `Minorio`:)

[`2`] Complete Mina [ZKApp Tutorials 1 – 4](https://docs.minaprotocol.com/zkapps/tutorials/zkapp-ui-with-react).

[`1`] Create sample project `zk project spark-add --ui next`.

## Challenges

TODO
