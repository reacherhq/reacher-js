/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface components {
	schemas: {
		/**
		 * The verification result of an email.
		 */
		CheckEmailOutput: {
			/**
			 * The input email address.
			 */
			input: string;
			is_reachable: components['schemas']['Reachable'];
			/**
			 * Miscellaneous information about the email account.
			 */
			misc:
				| components['schemas']['MiscDetails']
				| components['schemas']['Error'];
			/**
			 * Information gathered from querying the MX records of the mail server.
			 */
			mx:
				| components['schemas']['MxDetails']
				| components['schemas']['Error'];
			/**
			 * Verifications performed by connecting to the mail server via SMTP.
			 */
			smtp:
				| components['schemas']['SmtpDetails']
				| components['schemas']['Error'];
			syntax: components['schemas']['SyntaxDetails'];
			debug?: components['schemas']['DebugDetails'];
		};
		/**
		 * Object describing an error happening during the misc, MX, or SMTP verifications.
		 */
		Error: {
			/**
			 * An error type.
			 */
			type: string;
			/**
			 * A human-readable description of the error.
			 */
			message: string;
		};
		/**
		 * Miscellaneous information about the email account.
		 */
		MiscDetails: {
			/**
			 * Is the address provided by a known disposable email address provider?
			 */
			is_disposable: boolean;
			/**
			 * Is this email a role-based account?
			 */
			is_role_account: boolean;
			/**
			 * URL to the email's Gravatar profile picture. It is only populated if check_gravatar is set to true in the request, and if the email has an associated Gravatar.
			 */
			gravatar_url?: string;
		};
		/**
		 * Object holding the MX details of the mail server.
		 */
		MxDetails: {
			/**
			 * Does the server accept mails?
			 */
			accepts_mail: boolean;
			/**
			 * The list of FQDN (Fully Qualified Domain Names) of the mail server.
			 */
			records: string[];
		};
		/**
		 * Verifications performed by connecting to the mail server via SMTP.
		 */
		SmtpDetails: {
			/**
			 * Can the mail exchanger of the email address domain be contacted successfully?
			 */
			can_connect_smtp: boolean;
			/**
			 * Is the inbox of this mailbox full?
			 */
			has_full_inbox: boolean;
			/**
			 * Is this email address a catch-all address?
			 */
			is_catch_all: boolean;
			/**
			 * Is an email sent to this address deliverable?
			 */
			is_deliverable: boolean;
			/**
			 * Has this email address been disabled by the email provider?
			 */
			is_disabled: boolean;
		};
		/**
		 * Syntax validation of an email address.
		 */
		SyntaxDetails: {
			/**
			 * The domain name of the email, i.e. the part after the "@" symbol.
			 */
			domain: string;
			/**
			 * Is the address syntactically valid?
			 */
			is_valid_syntax: boolean;
			/**
			 * The username of the email, i.e. the part before the "@" symbol.
			 */
			username: string;
		};
		/**
		 * An enum to describe how confident we are that the recipient address is real: `safe`, `risky`, `invalid` and `unknown`. Check our FAQ to know the meanings of the 4 possibilities: https://help.reacher.email/email-attributes-inside-json.
		 */
		Reachable: 'invalid' | 'unknown' | 'safe' | 'risky';
		/**
		 * An enum to describe how we verify Yahoo emails.
		 */
		YahooVerifMethod: 'Api' | 'Headless' | 'Smtp';
		/**
		 * An enum to describe how we verify Hotmail emails.
		 */
		HotmailVerifMethod: 'Api' | 'Headless' | 'Smtp';
		/**
		 * An enum to describe how we verify Gmail emails.
		 */
		GmailVerifMethod: 'Api' | 'Smtp';
		/**
		 * Input containing all parameters necessary for an email verification, as well as some config on how to perform the verification.
		 */
		CheckEmailInput: {
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
			proxy?: components['schemas']['CheckEmailInputProxy'];
			/**
			 * SMTP port to use for email validation. Generally, ports 25, 465, 587 and 2525 are used.
			 */
			smtp_port?: number;
			yahoo_verif_method?: components['schemas']['YahooVerifMethod'];
			gmail_verif_method?: components['schemas']['GmailVerifMethod'];
			hotmail_verif_method?: components['schemas']['HotmailVerifMethod'];
			/**
			 * Whether to check if a gravatar image is existing for the given email.
			 */
			check_gravatar?: boolean;
			/**
			 * Number of retries of SMTP connections to do.
			 */
			retries?: number;
			/**
			 * How to apply TLS to a SMTP client connection.
			 */
			smtp_security?: 'None' | 'Opportunistic' | 'Required' | 'Wrapper';
			smtp_timeout?: components['schemas']['Duration'];
		};
		/**
		 * Proxy information for email verification.
		 */
		CheckEmailInputProxy: {
			/**
			 * The proxy host.
			 */
			host: string;
			/**
			 * The proxy port.
			 */
			port: number;
			/**
			 * Username to pass to proxy authentication.
			 */
			username?: string;
			/**
			 * Password to pass to proxy authentication.
			 */
			password?: string;
		};
		DebugDetails: {
			/**
			 * The time when the email verification started.
			 */
			start_time: string;
			/**
			 * The time when the email verification ended.
			 */
			end_time: string;
			duration: components['schemas']['Duration'];
			/**
			 * The name of the server that performed the email verification.
			 */
			server_name: string;
			smtp: components['schemas']['DebugDetailsSmtp'];
		};
		/**
		 * An object representing a duration (seconds + nanoseconds).
		 */
		Duration: {
			/**
			 * Seconds
			 */
			secs: number;
			/**
			 * Nanoseconds
			 */
			nanos: number;
		};
		/**
		 * Smtp details used for debugging, such as which method is used.
		 */
		DebugDetailsSmtp: {
			verif_method?: components['schemas']['VerifMethod'];
		};
		/**
		 * The verification method used for the email.
		 */
		VerifMethod: {
			/**
			 * The method used to perform the email verification
			 */
			type: 'Smtp' | 'Headless' | 'Api' | 'Skipped';
			/**
			 * If `type` is `SmtpConnection`, the hostname that Reacher connected to.
			 */
			host?: string;
			/**
			 * If `type` is `SmtpConnection`, the port that Reacher connected to.
			 */
			port?: number;
		};
	};
}
