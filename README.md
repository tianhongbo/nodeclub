Huami Forums
=

[![build status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]

[travis-image]: https://img.shields.io/travis/cnodejs/nodeclub/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cnodejs/nodeclub
[coverage-image]: https://img.shields.io/coveralls/cnodejs/nodeclub.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/cnodejs/nodeclub?branch=master
[david-image]: https://img.shields.io/david/cnodejs/nodeclub.svg?style=flat-square
[david-url]: https://david-dm.org/cnodejs/nodeclub
[node-image]: https://img.shields.io/badge/node.js-%3E=_4.2-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

## Introduction

Huami forums is based on open source forums software **Nodeclub**, which adopts both  **Node.js** and **MongoDB**.
[CNode(http://cnodejs.org)](http://cnodejs.org)

## Deployment

*不保证 Windows 系统的兼容性*

线上跑的是 [io.js](https://iojs.org) v2.3.3，[MongoDB](https://www.mongodb.org) 是 v2.6，[Redis](http://redis.io) 是 v2.8.9。

```
1. install `Node.js/io.js[required]` `MongoDB[required]` `Redis[required]`
2. run MongoDB and Redis
3. `$ make install` intall Node js dependencies
4. `cp config.default.js config.js` 
5. `$ make test` 
6. `$ node app.js`
7. visit `http://localhost:3000`
8. done!
```

## Test

```bash
$ make test
```

Execute coverage test

```bash
$ make test-cov
```

## Contribution

Any question or issue，please email nodeclub author @alsotang](https://github.com/alsotang) or Huami forums tianhongbo1@gmail.com

## License

MIT
