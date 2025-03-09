import axios from 'axios';
import { debug } from 'debug';

import { components } from './types';

const l = debug('reacher:single');

// These small type hacks are for generating nice documentation.
type ICheckEmailRequest = components['schemas']['CheckEmailRequest'];
type ICheckEmailOutput = components['schemas']['CheckEmailOutput'];
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckEmailRequest extends ICheckEmailRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckEmailOutput extends ICheckEmailOutput {}

/**
 * Reacher's backend URL.
 */
const REACHER_BACKEND_URL = 'https://api.reacher.email/v0/check_email';

/**
 * Options for checking an email.
 */
export interface CheckSingleOptions {
	/**
	 * Unique Reacher API token to use. This is required.
	 */
	apiToken: string;
	/**
	 * For users self-hosting Reacher and who would not like to use the Reacher
	 * SaaS, this option allows to override the backend URL to call.
	 */
	backendUrl?: string;
}

/**
 * Perform an email verification on the input email address.
 *
 * @param input - An object holding the email to be verified, as well as some
 * other configuration parameters to be used during the verification.
 * @param options - Additional options for making the API call.
 */
export function checkSingle(
	input: CheckEmailRequest,
	options: CheckSingleOptions
): Promise<CheckEmailOutput> {
	l('Processing email %s', input.to_email);

	const backendUrl = options.backendUrl || REACHER_BACKEND_URL;

	const headers = {
		'Content-Type': 'application/json',
		Authorization: options.apiToken,
	};

	return axios
		.post<CheckEmailOutput>(backendUrl, input, {
			headers,
		})
		.then(({ data }) => {
			l('Got result for %s: %s', input.to_email, data.is_reachable);

			return data;
		})
		.catch((err) => {
			l('Got error for %s: %s', input.to_email, err);

			throw err;
		});
}
