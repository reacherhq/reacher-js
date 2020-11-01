import { AsyncQueue, queue } from 'async';
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
	/**
	 * Concurrency of the queue.
	 */
	concurrency?: number;
	/**
	 * Callback to perform on each single email verification success.
	 */
	onSuccessSingle?: (output: CheckEmailOutput) => void;
}

/**
 * Default number of concurrent API calls. 100 is a good number to use with
 * Reacher.
 */
const DEFAULT_CONCURRENCY = 100;

/**
 * This function takes an array of emails, and performs batch email
 * verification on them. Under the hood, it creates a queue, with a adjustable
 * concurrency defined in the options, and drains the queue.
 *
 * @param inputs - An array of inputs for making email verifications.
 * @param options - Options to pass in to make the api call.
 *
 * @returns - Returns an API requests queue, which is an instance of
 * [QueueObject](https://caolan.github.io/async/v3/docs.html#QueueObject).
 */
export function batchQueue(
	options: CheckBatchOptions = {}
): AsyncQueue<CheckEmailInput> {
	l('Creating a batch queue.');

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

	return q;
}
