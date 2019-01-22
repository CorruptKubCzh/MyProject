// import
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock 一组数据
const GetNewsData = function () {
	let articles = []
	for (var i = 0; i < 100; i++) {
		let newArticleObject ={
			title:Random.csentence(5,30),
			thumbnail_pic_s:Random.dataImage('300x300','模拟的图片'),
			author_name:Random.cname(),
			date:Random.date()+' '+Random.time()
		}
		articles.push(newArticleObject)
	}
	return {
		articles:articles
	}
}

Mock.mock('/new/api','post',GetNewsData)