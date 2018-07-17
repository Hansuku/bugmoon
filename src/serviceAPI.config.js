const BASEURL = "https://www.easy-mock.com/mock/5af8f1df52c5bd051e93f6cc/koa2/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    throwError:LOCALURL+'good/getWarning',
    getShopingMallInfo : BASEURL+'indexGoods',
    getGoodsInfo : BASEURL+'getGoodsInfo',
    regeisterUser : LOCALURL+'user/register',
    login : LOCALURL+'user/login',
    getDetailGoodInfo : LOCALURL+'good/getDetailGoodsInfo',
}

module.exports = URL