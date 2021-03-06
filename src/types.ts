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
		 * An enum to describe how confident we are that the recipient address is real: `safe`, `risky`, `invalid` and `unknown`. Check our FAQ to know the meanings of the 4 possibilities: https://www.notion.so/reacherhq/Reacher-FAQ-389d6f51a53749f29d914239613c64eb.
		 */
		Reachable: 'invalid' | 'unknown' | 'safe' | 'risky';
		/**
		 * Input containing all parameters necessary for an email verification.
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
		};
	};
}
