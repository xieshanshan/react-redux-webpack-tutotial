module.exports={
  entry: __dirname + '/src/index.js',
  output:{
    path: __dirname + '/public',
    filename: 'public.js'
  },
  devServer: {
    contentBase: "",
    port: 2222,
    inline: true,
    colors: true
  }
}