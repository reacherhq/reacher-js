// Reacher - Email Verification
// Copyright (C) 2018-2020 Amaury Martiny

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import axios, { AxiosRequestConfig } from 'axios';

import pkgJson from '../package.json';
import { components } from './types';

export type CheckEmailInput = components['schemas']['CheckEmailInput'];
export type CheckEmailOutput = components['schemas']['CheckEmailOutput'];

/**
 * Reacher's backend base URL.
 */
const REACHER_BACKEND_URL = `https://ssfy.sh/amaurymartiny/reacher@${
	(pkgJson as { version: string }).version
}`;

/**
 * Perform an email verification on the input email address.
 *
 * @param input - An object holding the email to be verified, as well as some
 * other configuration parameters to be used during the verification.
 * @param apiToken - Your Reacher's API token. If not passed, then the API is
 * still usable, but heavy rate-limiting will be applied.
 * @param config - Additional configuration to be passed to the axios request.
 */
export function reacher(
	input: CheckEmailInput,
	apiToken?: string,
	config: AxiosRequestConfig = {}
): Promise<CheckEmailOutput> {
	return axios.post(`${REACHER_BACKEND_URL}/check_email`, input, {
		...config,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		headers: {
			'Content-Type': 'application/json',
			Authorization: apiToken,
			...config.headers,
		},
	});
}
