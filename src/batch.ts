import { queue } from 'async';
import { debug } from 'debug';

import {
	CheckEmailInput,
	CheckEmailOutput,
	checkSingle,
	CheckSingleOptions,
} from './single';

const l = debug('reacher:batch');

/**
 * Options for making a batch email verification.
 */
export interface CheckBatchOptions extends CheckSingleOptions {
	concurrency?: number;
	/**
	 * Callback to perform on the
	 */
	onSuccessSingle?: (output: CheckEmailOutput) => void;
}

/**
 * Default number of concurrent API calls.
 */
const DEFAULT_CONCURRENCY = 10;

/**
 * This function takes an array of emails, and performs batch email
 * verification on them. Under the hood, it creates a queue, with a adjustable
 * concurrency defined in the options, and drains the queue.
 *
 * @param inputs - An array of inputs for making email verifications.
 * @param options - Options to pass in to make the api call.
 */
export function checkBatch(
	inputs: CheckEmailInput[],
	options: CheckBatchOptions = {}
): Promise<void> {
	l('Processing %d emails.', inputs.length);

	const q = queue<CheckEmailInput>((task, callback) => {
		checkSingle(task, options)
			.then((output) => {
				if (options.onSuccessSingle) {
					options.onSuccessSingle(output);
				}
				callback();
			})
			.catch(callback);
	}, options.concurrency || DEFAULT_CONCURRENCY);

	// Add emails to the queue.
	q.push(inputs);

	// Drain the queue.
	return q.drain();
}
