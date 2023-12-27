# 快速开始4
``` go
func main() {
	config.LoadConfig()
	err := cmd.RootCommand.Execute()
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	return
}
```