package config

import "parrot/pkg/foundation"

type Config struct {
	BasePathURL string
	AppPort     string
}

var conf *Config

// Get get instance of application's config
func Get() *Config {
	if conf == nil {
		conf = &Config{
			BasePathURL: foundation.GetEnvWithDefault("BASE_PATH_URL", "localhost"),
			AppPort:     foundation.GetEnvWithDefault("APP_PORT", "8080"),
		}
	}
	return conf
}
