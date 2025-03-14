/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface components {
	schemas: {
		/**
		 * A request object to perform an email verification. The `to_email` field is required, all other fields are optional.
		 */
		CheckEmailRequest: {
			/**
			 * In the SMTP connection, the FROM email address.
			 */
			from_email?: string;
			/**
			 * The email address to check.
			 */
			to_email: string;
			/**
			 * In the SMTP connection, the EHLO hostname.
			 */
			hello_name?: string;
			proxy?: components['schemas']['CheckEmailRequestProxy'];
			/**
			 * SMTP port to use for email validation. Defaults to 25, but 465, 587, and 2525 are sometimes also used.
			 */
			smtp_port?: number;
			gmail_verif_method?: components['schemas']['GmailVerifMethod'];
			hotmailb2b_verif_method?: components['schemas']['HotmailB2BVerifMethod'];
			hotmailb2c_verif_method?: components['schemas']['HotmailB2CVerifMethod'];
			yahoo_verif_method?: components['schemas']['YahooVerifMethod'];
			/**
			 * Whether to check if a Gravatar image exists for the given email.
			 */
			check_gravatar?: boolean;
		};
		/**
		 * The result of the email verification process.
		 */
		CheckEmailOutput: {
			/**
			 * The email address that was verified.
			 */
			input: string;
			is_reachable: components['schemas']['Reachable'];
			/**
			 * Additional information about the email account.
			 */
			misc:
				| components['schemas']['MiscDetails']
				| components['schemas']['CoreError'];
			/**
			 * Details obtained from querying the mail server's MX records.
			 */
			mx:
				| components['schemas']['MxDetails']
				| components['schemas']['CoreError'];
			/**
			 * Results from connecting to the mail server via SMTP.
			 */
			smtp:
				| components['schemas']['SmtpDetails']
				| components['schemas']['CoreError'];
			syntax: components['schemas']['SyntaxDetails'];
			debug?: components['schemas']['DebugDetails'];
		};
		/**
		 * An enumeration describing the confidence level that the recipient address is valid: `safe`, `risky`, `invalid`, or `unknown`. Refer to our FAQ for detailed definitions: https://help.reacher.email/email-attributes-inside-json.
		 */
		Reachable: 'invalid' | 'unknown' | 'safe' | 'risky';
		/**
		 * Additional information about the email account.
		 */
		MiscDetails: {
			/**
			 * Indicates if the email address is from a known disposable email provider.
			 */
			is_disposable: boolean;
			/**
			 * Indicates if the email address is a role-based account.
			 */
			is_role_account: boolean;
			/**
			 * URL to the Gravatar profile picture associated with the email, if available and requested.
			 */
			gravatar_url?: string;
			/**
			 * Is this a B2C email address?
			 */
			is_b2c: boolean;
		};
		/**
		 * Details about the mail server's MX records.
		 */
		MxDetails: {
			/**
			 * Indicates if the mail server accepts emails.
			 */
			accepts_mail: boolean;
			/**
			 * List of Fully Qualified Domain Names (FQDN) of the mail server.
			 */
			records: string[];
		};
		/**
		 * Results from SMTP connection attempts to the mail server.
		 */
		SmtpDetails: {
			/**
			 * Indicates if the mail exchanger can be contacted successfully.
			 */
			can_connect_smtp: boolean;
			/**
			 * Indicates if the mailbox is full.
			 */
			has_full_inbox: boolean;
			/**
			 * Indicates if the email address is a catch-all address.
			 */
			is_catch_all: boolean;
			/**
			 * Indicates if an email sent to this address is deliverable.
			 */
			is_deliverable: boolean;
			/**
			 * Indicates if the email address has been disabled by the provider.
			 */
			is_disabled: boolean;
		};
		/**
		 * Validation of the email address syntax.
		 */
		SyntaxDetails: {
			/**
			 * The domain part of the email address.
			 */
			domain: string;
			/**
			 * Indicates if the email address syntax is valid.
			 */
			is_valid_syntax: boolean;
			/**
			 * The username part of the email address.
			 */
			username: string;
		};
		/**
		 * Details of an error encountered during the verification process.
		 */
		CoreError: {
			/**
			 * The type of error.
			 */
			type: string;
			/**
			 * A human-readable description of the error.
			 */
			message: string;
		};
		/**
		 * Enumeration describing the method used to verify Yahoo emails.
		 */
		YahooVerifMethod: 'Api' | 'Headless' | 'Smtp';
		/**
		 * Enumeration describing the method used to verify Hotmail B2B emails.
		 */
		HotmailB2BVerifMethod: 'Smtp';
		/**
		 * Enumeration describing the method used to verify Hotmail B2C emails.
		 */
		HotmailB2CVerifMethod: 'Smtp' | 'Headless' | 'Api';
		/**
		 * Enumeration describing the method used to verify Gmail emails.
		 */
		GmailVerifMethod: 'Api' | 'Smtp';
		/**
		 * Proxy configuration for email verification.
		 */
		CheckEmailRequestProxy: {
			/**
			 * The proxy host address.
			 */
			host: string;
			/**
			 * The proxy port number.
			 */
			port: number;
			/**
			 * Username for proxy authentication.
			 */
			username?: string;
			/**
			 * Password for proxy authentication.
			 */
			password?: string;
		};
		DebugDetails: {
			/**
			 * The timestamp when the email verification started.
			 */
			start_time: string;
			/**
			 * The timestamp when the email verification ended.
			 */
			end_time: string;
			duration: components['schemas']['Duration'];
			/**
			 * The name of the server that performed the verification.
			 */
			server_name: string;
			smtp: components['schemas']['DebugDetailsSmtp'];
		};
		/**
		 * An object representing a duration in seconds and nanoseconds.
		 */
		Duration: {
			/**
			 * Duration in seconds.
			 */
			secs: number;
			/**
			 * Duration in nanoseconds.
			 */
			nanos: number;
		};
		/**
		 * SMTP details used for debugging, including the verification method.
		 */
		DebugDetailsSmtp: {
			verif_method?: components['schemas']['VerifMethod'];
		};
		/**
		 * The method used for email verification.
		 */
		VerifMethod: {
			/**
			 * The method used for the email verification.
			 */
			type: 'Smtp' | 'Headless' | 'Api' | 'Skipped';
		};
		/**
		 * Optional webhook configuration for sending email verification results during bulk verification.
		 */
		TaskWebhook: { on_each_email?: components['schemas']['Webhook'] };
		/**
		 * Configuration for a webhook to receive email verification results. The method will be POST, and the body will contain the email verification response.
		 */
		Webhook: {
			/**
			 * The URL to send the email verification results to.
			 */
			url: string;
			extra?: { [key: string]: any };
		};
	};
}
