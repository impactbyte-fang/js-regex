const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const emails = [
  "creativemarket88gmail.com",
  "luakay@gmail.com",
  "jemikanegara@gmail.com",
  "myavidz.iqbal@gmail.com",
  "gibran@brantem.",
  "maya@impactbyte.com",
  "adamfadly11@gmail.com",
  "sutantomuhsin@gmail.com",
  "wippy......zulkarnain@gmail.com"
]

const validateEmails = emails.filter(email => {
  if (pattern.test(email)) return email
})

console.log(validateEmails)
