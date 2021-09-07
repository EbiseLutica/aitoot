# Project Aitoot

**本プロジェクトは実験的な開発を行っている段階です。本プロジェクトの成果物については、本番での運用は一切意図していません。**

Project Aitoot は、Misskeyインスタンス用のMastodon API互換レイヤーソフトウェアです。

Misskey インスタンスに対するクライアントとして、Mastodon アプリに対するサーバーとして動作するミドルウェアとなっており、既存のMisskeyインスタンスを細工することなく動作します。本プロジェクトの目的は、Mastodonクライアントやbot、ツールを変更することなくMisskeyで動作可能にすることです。

本プロジェクトは、Misskeyプロジェクト、Mastodonプロジェクトのいずれとも関係の無い独立したプロジェクトです。

## ビルド方法

```
yarn
yarn build
```

## テスト方法

```
yarn test
```

## 実行方法

## ライセンス

[AGPL 3.0](LICENSE]