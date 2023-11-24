为什么我直接提交到master 贡献墙上不显示贡献？
解决： git config user.name or user.email 查看本地用户名字和邮箱
git config --global user.email 'email@gmail.com'
    github上 -->setting -->email 修改为和本地的邮箱 

有时候就git push因为网络原因提交不上去?
解决：执行git config --global --unset http.proxy
    git config --global --unset https.proxy

