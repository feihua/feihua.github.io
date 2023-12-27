# 文档
``` go
package run



func downloadFromURL(url, fileName string) {
	var down bool
	if fd, err := os.Stat(fileName); err != nil && os.IsNotExist(err) {
		down = true
	} else if fd.Size() == int64(0) {
		down = true
	} else {
		logger.Log.Infof("'%s' already exists", fileName)
		return
	}
	
}
```