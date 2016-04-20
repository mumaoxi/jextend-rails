# Jextend

常用的一些javascript函数总结


## Status
代码 已经打包发布到 RubyGems.

[![image](https://ruby-china-files.b0.upaiyun.com/photo/5982eaaa64f467d9dbda03ad4f40ea27.png)](https://rubygems.org/gems/jextend)

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'jextend'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jextend

Write this in your `application.js`
```javascript
//=require jextend
```

## Usage
### Array

```javascript
[2,3,5].contains(3);
//=>true
[2,3,5].contains(6);
//=>false
```
### Date

```javascript
new Date().format('yyyy-MM-dd');
//=>"2016-04-20"
```
### Math
```javascript
Math.n_pow(2,3);
//=>8_
Math.decimal_point('3.3333',2);
//=>3.33_
```
### String
```javascript
"Good {0} everyone.How do {1} do?".format('morning','you');
```

### window.location.params
```javascript
//current_url: http://localhost:3000/?start_date=2015-12-06&type=newer_
window.location.params()
//=>{start_date:'2015-12-06',type:'newer'}
```


## Contributing

1. Fork it ( https://github.com/[my-github-username]/jextend/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
