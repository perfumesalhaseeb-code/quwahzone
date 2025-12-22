'use client';
import React from 'react';
import Button from '@/componenets/Button';

export default function StartProgramButton() {
    return (
        <Button
            text="Start This Program"
            onClick={() => { console.log("Start program clicked"); }}
            disabled={false}
        />
    );
}
