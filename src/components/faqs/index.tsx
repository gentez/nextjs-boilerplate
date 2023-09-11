import React from 'react'

const FAQS = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5  min-h-sceen">
	<div className="flex flex-col items-center">
		<h2 className="font-bold text-5xl mt-5 tracking-tight">
			FAQ
		</h2>
		<p className="text-orange-500 text-xl mt-3">
			Frequenty asked questions
		</p>
	</div>
	<div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5">
        <details className="mce-accordion p-4 border border-gray-300 shadow-md hover:shadow-lg transition duration-300">
  <summary className="cursor-pointer">Accordion summary...</summary>
  <p className="mt-2">Accordion body...</p>
</details>

		</div>


		
	</div>
</div>
  )
}

export default FAQS
