package helper

import (
	"log"
	"strings"
	"time"
)

const TimeStampFormat = "20060102150405.000000000"

var bkkLocation *time.Location

func init() {
	SetLocalLoc()
	time.Local = bkkLocation
}

// SetLocalLoc set local time (GMT +7)
func SetLocalLoc() {
	var err error
	if bkkLocation == nil {
		bkkLocation, err = time.LoadLocation("Asia/Bangkok")
		if err != nil {
			log.Fatal(err)
		}
	}
}

// TimeToTimeStamp return timestamp as string
func TimeToTimeStamp(t time.Time) string {
	return strings.Replace(t.Format(TimeStampFormat), ".", "", 14)
}

// TimeFromUnixTimeStamp return time from unix timestamp
func TimeFromUnixTimeStamp(unixTimestamp int64) time.Time {
	return time.Unix(unixTimestamp, 0)
}
