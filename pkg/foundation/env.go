package foundation

import "os"

func GetEnvWithDefault(envName, defaultVal string) string {
	env := os.Getenv(envName)
	if len(env) == 0 {
		return defaultVal
	}
	return env
}
