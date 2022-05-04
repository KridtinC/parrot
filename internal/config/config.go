package config

import "parrot/pkg/foundation"

type AppEnvironment string

var (
	EnvDEV AppEnvironment = "dev"
	EnvPRD AppEnvironment = "prd"
)

type Config struct {
	BasePathURL string
	AppPort     string
	Environment AppEnvironment
	DBConfig    *DBConfig

	JWTSecretKey []byte
}

var conf *Config

// Get get instance of application's config
func Get() *Config {
	if conf == nil {
		conf = &Config{
			BasePathURL: foundation.GetEnvWithDefault("BASE_PATH_URL", "localhost"),
			AppPort:     foundation.GetEnvWithDefault("APP_PORT", "8080"),
			Environment: AppEnvironment(foundation.GetEnvWithDefault("APP_ENV", "dev")),
			DBConfig: &DBConfig{
				UserName: foundation.GetEnvWithDefault("DB_USERNAME", "parrot"),
				Password: foundation.GetEnvWithDefault("DB_PASSWORD", "P@ssw0rd"),
				IP:       foundation.GetEnvWithDefault("DB_IP", "localhost"),
				Port:     foundation.GetEnvWithDefault("DB_PORT", "3306"),
				Name:     foundation.GetEnvWithDefault("DB_NAME", "parrot"),
			},

			JWTSecretKey: []byte(foundation.GetEnvWithDefault("JWT_SECRET_KEY", "")),
		}
	}
	return conf
}
