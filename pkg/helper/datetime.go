package helper

import (
	"strings"
	"time"
)

const TimeStampFormat = "20060102150405.000000000"

// TimeToTimeStamp return timestamp as string
func TimeToTimeStamp(t time.Time) string {
	return strings.Replace(t.Format(TimeStampFormat), ".", "", 14)
}
